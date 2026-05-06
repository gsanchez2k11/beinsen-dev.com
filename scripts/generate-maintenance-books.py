#!/usr/bin/env python
"""
Generate Libro de Mantenimiento PDFs for all Beinsen machines.
Based on the OBREI reference format.
"""

import os
import re
import sys

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table,
    TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.platypus.flowables import Flowable, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ── Colours ────────────────────────────────────────────────────────────────────
C_BLACK   = colors.HexColor('#1A1A1A')
C_ORANGE  = colors.HexColor('#F26522')
C_DGRAY   = colors.HexColor('#2D2D2D')
C_LGRAY   = colors.HexColor('#F0F0F0')
C_MGRAY   = colors.HexColor('#CCCCCC')
C_RED     = colors.HexColor('#CC0000')
C_GREEN   = colors.HexColor('#1A7A3A')
C_YELLOW  = colors.HexColor('#F5A623')
C_WHITE   = colors.white
C_TEXT    = colors.HexColor('#333333')

PAGE_W, PAGE_H = A4
MARGIN = 2 * cm
CONTENT_W = PAGE_W - 2 * MARGIN

# ── Base styles ────────────────────────────────────────────────────────────────
base = getSampleStyleSheet()

def S(name, **kw):
    return ParagraphStyle(name, **kw)

sNormal = S('sNormal', fontName='Helvetica', fontSize=9, leading=13, textColor=C_TEXT)
sSmall  = S('sSmall',  fontName='Helvetica', fontSize=8, leading=11, textColor=C_TEXT)
sBold   = S('sBold',   fontName='Helvetica-Bold', fontSize=9, leading=13, textColor=C_TEXT)
sTitle  = S('sTitle',  fontName='Helvetica-Bold', fontSize=22, leading=28, textColor=C_WHITE, alignment=TA_CENTER)
sSubT   = S('sSubT',   fontName='Helvetica-Bold', fontSize=13, leading=17, textColor=C_ORANGE, alignment=TA_CENTER)
sSect   = S('sSect',   fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=C_WHITE)
sH2     = S('sH2',     fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=C_DGRAY)
sTOC    = S('sTOC',    fontName='Helvetica', fontSize=10, leading=16, textColor=C_TEXT)
sCenter = S('sCenter', fontName='Helvetica', fontSize=9, leading=13, textColor=C_TEXT, alignment=TA_CENTER)
sCenterB= S('sCenterB',fontName='Helvetica-Bold', fontSize=9, leading=13, textColor=C_WHITE, alignment=TA_CENTER)
sAlert  = S('sAlert',  fontName='Helvetica-Bold', fontSize=9, leading=13, textColor=C_WHITE)
sAlertB = S('sAlertB', fontName='Helvetica', fontSize=8.5, leading=12, textColor=C_BLACK)
sCover  = S('sCover',  fontName='Helvetica', fontSize=10, leading=14, textColor=C_WHITE, alignment=TA_CENTER)
sMeta   = S('sMeta',   fontName='Helvetica', fontSize=8.5, leading=12, textColor=C_TEXT)
sMetaB  = S('sMetaB',  fontName='Helvetica-Bold', fontSize=8.5, leading=12, textColor=C_TEXT)
sFooter = S('sFooter', fontName='Helvetica', fontSize=7, leading=9, textColor=C_MGRAY, alignment=TA_CENTER)

# ── Header/footer callbacks ─────────────────────────────────────────────────
def make_page_template(machine_name):
    def on_page(canvas, doc):
        canvas.saveState()
        # Top black bar
        canvas.setFillColor(C_BLACK)
        canvas.rect(0, PAGE_H - 1.4*cm, PAGE_W, 1.4*cm, fill=1, stroke=0)
        # Orange accent line
        canvas.setFillColor(C_ORANGE)
        canvas.rect(0, PAGE_H - 1.6*cm, PAGE_W, 0.2*cm, fill=1, stroke=0)
        # Header text
        canvas.setFillColor(C_WHITE)
        canvas.setFont('Helvetica-Bold', 9)
        canvas.drawString(MARGIN, PAGE_H - 1.0*cm, 'LIBRO DE MANTENIMIENTO')
        canvas.setFont('Helvetica', 8)
        canvas.drawRightString(PAGE_W - MARGIN, PAGE_H - 1.0*cm, machine_name)
        # Footer line
        canvas.setStrokeColor(C_MGRAY)
        canvas.setLineWidth(0.5)
        canvas.line(MARGIN, 1.5*cm, PAGE_W - MARGIN, 1.5*cm)
        # Footer text
        canvas.setFillColor(C_MGRAY)
        canvas.setFont('Helvetica', 7)
        canvas.drawString(MARGIN, 1.0*cm, 'Beinsen — Documento de uso interno | www.beinsen.com')
        canvas.drawRightString(PAGE_W - MARGIN, 1.0*cm, f'Pág. {doc.page}')
        canvas.restoreState()
    return on_page

def cover_page(canvas, doc):
    canvas.saveState()
    # Full black background
    canvas.setFillColor(C_BLACK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Orange top accent
    canvas.setFillColor(C_ORANGE)
    canvas.rect(0, PAGE_H - 0.8*cm, PAGE_W, 0.8*cm, fill=1, stroke=0)
    # Orange bottom accent
    canvas.rect(0, 0, PAGE_W, 0.8*cm, fill=1, stroke=0)
    # Beinsen logo text
    canvas.setFillColor(C_WHITE)
    canvas.setFont('Helvetica-Bold', 28)
    canvas.drawCentredString(PAGE_W/2, PAGE_H - 3.5*cm, 'BEINSEN')
    # Orange underline
    canvas.setFillColor(C_ORANGE)
    canvas.setStrokeColor(C_ORANGE)
    canvas.setLineWidth(2)
    canvas.line(PAGE_W/2 - 3*cm, PAGE_H - 3.9*cm, PAGE_W/2 + 3*cm, PAGE_H - 3.9*cm)
    canvas.restoreState()

# ── Flowables ──────────────────────────────────────────────────────────────────
class SectionHeader(Flowable):
    """Orange-background section header."""
    def __init__(self, num, title, w=CONTENT_W):
        Flowable.__init__(self)
        self.num   = num
        self.title = title
        self.w     = w
        self.h     = 0.7*cm

    def draw(self):
        self.canv.setFillColor(C_ORANGE)
        self.canv.rect(0, 0, self.w, self.h, fill=1, stroke=0)
        self.canv.setFillColor(C_WHITE)
        self.canv.setFont('Helvetica-Bold', 10)
        txt = f'  {self.num}  {self.title}'
        self.canv.drawString(0.3*cm, 0.18*cm, txt)

    def wrap(self, aW, aH):
        return self.w, self.h

class AlertBox(Flowable):
    """Coloured alert box (ADVERTENCIA / PRECAUCIÓN / INFORMACIÓN)."""
    COLOURS = {
        'ADVERTENCIA': (C_RED,    C_WHITE, '[!]'),
        'PRECAUCION':  (C_YELLOW, C_BLACK, '[!]'),
        'INFORMACION': (C_GREEN,  C_WHITE, '[i]'),
    }

    def __init__(self, kind, lines, w=CONTENT_W):
        Flowable.__init__(self)
        self.kind  = kind
        self.lines = lines
        self.w     = w
        bg, fg, icon = self.COLOURS.get(kind, (C_DGRAY, C_WHITE, '•'))
        self.bg = bg; self.fg = fg; self.icon = icon

    def wrap(self, aW, aH):
        n = len(self.lines)
        self.h = (1.0 + n * 0.55) * cm
        return self.w, self.h

    def draw(self):
        # Background
        self.canv.setFillColor(self.bg)
        self.canv.rect(0, 0, self.w, self.h, fill=1, stroke=0)
        # Left stripe
        self.canv.setFillColor(colors.Color(0, 0, 0, alpha=0.2))
        self.canv.rect(0, 0, 0.5*cm, self.h, fill=1, stroke=0)
        # Title
        self.canv.setFillColor(self.fg)
        self.canv.setFont('Helvetica-Bold', 9)
        self.canv.drawString(0.7*cm, self.h - 0.55*cm, f'{self.icon}  {self.kind}')
        # Lines
        self.canv.setFont('Helvetica', 8.5)
        y = self.h - 1.05*cm
        for line in self.lines:
            self.canv.drawString(0.7*cm, y, f'• {line}')
            y -= 0.5*cm

# ── Helper builders ────────────────────────────────────────────────────────────
def section_break(story, num, title):
    story.append(Spacer(1, 0.3*cm))
    story.append(SectionHeader(num, title))
    story.append(Spacer(1, 0.3*cm))

def checklist_table(story, tasks):
    """Build a checklist table with FREC / TAREA / CRITERIO / ✓ / FIRMA columns."""
    col_w = [1.8*cm, 6.5*cm, 5.5*cm, 1.0*cm, 2.0*cm]
    header = [
        Paragraph('FREC.',  sCenterB),
        Paragraph('TAREA DE MANTENIMIENTO', sCenterB),
        Paragraph('CRITERIO OK SI…', sCenterB),
        Paragraph('✓', sCenterB),
        Paragraph('FIRMA', sCenterB),
    ]
    data = [header]
    for frec, tarea, criterio in tasks:
        data.append([
            Paragraph(frec, sCenter),
            Paragraph(tarea, sSmall),
            Paragraph(criterio, sSmall),
            '',
            '',
        ])
    t = Table(data, colWidths=col_w, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',  (0, 0), (-1, 0), C_DGRAY),
        ('TEXTCOLOR',   (0, 0), (-1, 0), C_WHITE),
        ('FONTNAME',    (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE',    (0, 0), (-1, 0), 8),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [C_WHITE, C_LGRAY]),
        ('GRID',        (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('VALIGN',      (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING',  (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(t)
    story.append(Spacer(1, 0.3*cm))

def registro_table(story, rows=20):
    """Intervention log table."""
    col_w = [2.0*cm, 2.5*cm, 2.0*cm, 4.5*cm, 4.5*cm, 1.3*cm]
    header = [
        Paragraph('FECHA', sCenterB),
        Paragraph('TÉCNICO', sCenterB),
        Paragraph('TIPO INT.', sCenterB),
        Paragraph('DESCRIPCIÓN', sCenterB),
        Paragraph('OBSERVACIONES', sCenterB),
        Paragraph('H.', sCenterB),
    ]
    data = [header] + [['', '', '', '', '', ''] for _ in range(rows)]
    t = Table(data, colWidths=col_w, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',  (0, 0), (-1, 0), C_DGRAY),
        ('TEXTCOLOR',   (0, 0), (-1, 0), C_WHITE),
        ('FONTNAME',    (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE',    (0, 0), (-1, 0), 8),
        ('ROWHEIGHTS',  (0, 1), (-1, -1), 0.65*cm),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [C_WHITE, C_LGRAY]),
        ('GRID',        (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('VALIGN',      (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING',  (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 3),
    ]))
    story.append(t)

def piezas_table(story, rows=20):
    """Replacement parts log table."""
    col_w = [2.0*cm, 2.5*cm, 5.5*cm, 2.5*cm, 1.5*cm, 2.8*cm]
    header = [
        Paragraph('FECHA', sCenterB),
        Paragraph('N° SERIE / REF.', sCenterB),
        Paragraph('PIEZA SUSTITUIDA', sCenterB),
        Paragraph('MOTIVO', sCenterB),
        Paragraph('CANT.', sCenterB),
        Paragraph('TÉCNICO', sCenterB),
    ]
    data = [header] + [['', '', '', '', '', ''] for _ in range(rows)]
    t = Table(data, colWidths=col_w, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',  (0, 0), (-1, 0), C_DGRAY),
        ('TEXTCOLOR',   (0, 0), (-1, 0), C_WHITE),
        ('FONTNAME',    (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE',    (0, 0), (-1, 0), 8),
        ('ROWHEIGHTS',  (0, 1), (-1, -1), 0.65*cm),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [C_WHITE, C_LGRAY]),
        ('GRID',        (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('VALIGN',      (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING',  (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 3),
    ]))
    story.append(t)

# ── Parse planchas.ts ──────────────────────────────────────────────────────────
def parse_machines(ts_path):
    with open(ts_path, encoding='utf-8') as f:
        content = f.read()

    machines = []
    # Find each top-level object in the array
    # Strategy: find all "id": "..." at top level (4-space indent), collect block
    lines = content.split('\n')
    machine_starts = []
    for i, line in enumerate(lines):
        # Top-level machine entries start with 2 spaces + "{"
        if line.strip() == '{' and i > 0:
            machine_starts.append(i)

    # Build machine blocks by finding matching closing brace
    blocks = []
    for idx, start in enumerate(machine_starts):
        depth = 0
        end = start
        for j in range(start, len(lines)):
            for ch in lines[j]:
                if ch == '{': depth += 1
                elif ch == '}': depth -= 1
            if depth == 0 and j > start:
                end = j
                break
        block_text = '\n'.join(lines[start:end+1])
        blocks.append(block_text)

    for block in blocks:
        m = {}
        # Extract id
        id_m = re.search(r'"id":\s*"([^"]+)"', block)
        if id_m:
            m['id'] = id_m.group(1)
        # Extract slug (override for folder name)
        slug_m = re.search(r'"slug":\s*"([^"]+)"', block)
        m['slug'] = slug_m.group(1) if slug_m else m.get('id', '')
        # Extract name.es
        name_m = re.search(r'"name":\s*\{[^}]*"es":\s*"([^"]+)"', block, re.S)
        if name_m:
            m['name_es'] = name_m.group(1)
        # Extract category.es
        cat_m = re.search(r'"category":\s*\{[^}]*"es":\s*"([^"]+)"', block, re.S)
        m['category'] = cat_m.group(1) if cat_m else ''
        # Extract openingType.es
        ot_m = re.search(r'"openingType":\s*\{[^}]*"es":\s*"([^"]+)"', block, re.S)
        m['opening_type'] = ot_m.group(1) if ot_m else ''
        # Extract technicalSpecs
        specs = []
        ts_m = re.search(r'"technicalSpecs":\s*\[(.*?)\]', block, re.S)
        if ts_m:
            spec_text = ts_m.group(1)
            # Each spec: { "label": { "es": "...", ... }, "value": "..." or { "es": "...", ... } }
            for spec in re.finditer(r'\{[^{}]*"label"[^{}]*\{[^{}]*\}[^{}]*\}', spec_text, re.S):
                spec_str = spec.group(0)
                label_m = re.search(r'"label":\s*\{[^}]*"es":\s*"([^"]+)"', spec_str, re.S)
                val_m   = re.search(r'"value":\s*"([^"]+)"', spec_str)
                val_obj_m = re.search(r'"value":\s*\{[^}]*"es":\s*"([^"]+)"', spec_str, re.S)
                label = label_m.group(1) if label_m else ''
                value = (val_m.group(1) if val_m else
                         val_obj_m.group(1) if val_obj_m else '')
                if label:
                    specs.append((label, value))
        m['specs'] = specs
        if m.get('id') and m.get('name_es'):
            machines.append(m)

    return machines


def spec_val(specs, *keywords):
    """Find spec value by keyword match (case-insensitive)."""
    for label, val in specs:
        ll = label.lower()
        for kw in keywords:
            if kw.lower() in ll:
                return val
    return '—'


# ── Per-machine enriched data ──────────────────────────────────────────────────
# Keys per machine:
#   specs          → list of (label, value) — replaces auto-parsed specs
#   voltaje/potencia/temp_max/timer/plato/peso/control  → quick-ref overrides
#   components     → list of (name, description) — extra section in Sec.1
#   safety_adv     → extra lines for ADVERTENCIA box
#   safety_prec    → extra lines for PRECAUCION box
#   safety_info    → extra lines for INFORMACION box
#   daily/weekly/monthly → extra checklist rows (frec, tarea, criterio)
ENRICHED = {
    'alaska-plancha-termica-textil': {
        'specs': [
            ('Tipo de apertura',          'Automatica electrica, bandeja deslizante inferior'),
            ('Tamano de platina',          '38x38 cm / 40x50 cm'),
            ('Controlador',               'GY-13 pantalla tactil 6" alta resolucion'),
            ('Configuraciones guardadas', '3'),
            ('Ajuste de presion',         '0-9'),
            ('Apagado automatico',        'Si'),
            ('Laser de posicionamiento',  'Si'),
            ('Interruptor de dos manos',  'Si (seguridad activa)'),
            ('Voltaje',                   '120V / 220V'),
            ('Potencia',                  '1.6 kW (120V) / 1.8 kW (220V)'),
            ('Temperatura maxima',        '230 C'),
            ('Temporizador',              '0-999 s'),
            ('Peso neto',                 '35 kg (38x38) / 42 kg (40x50)'),
            ('Peso bruto',                '39 kg (38x38) / 46 kg (40x50)'),
            ('Tamano de maquina',         '55x42x41 cm / 53x39x41 cm'),
            ('Tamano de embalaje',        '65x52x50 cm / 75x52x50 cm'),
            ('Certificacion',             'CE'),
        ],
        'voltaje':  '120V / 220V',
        'potencia': '1.6 kW (120V) / 1.8 kW (220V)',
        'temp_max': '230 C',
        'timer':    '0-999 s',
        'plato':    '38x38 cm / 40x50 cm',
        'peso':     '35 kg (38x38) / 42 kg (40x50)',
        'control':  'GY-13 pantalla tactil 6"',
        'components': [
            ('Motor electrico',
             'Sistema de accionamiento electrico para apertura y cierre automatico. '
             'No requiere compresor de aire ni accion manual.'),
            ('Platina de aluminio',
             'Placa calefactora de 5 cm de espesor que garantiza distribucion de calor '
             'uniforme en toda la superficie de trabajo.'),
            ('Controlador GY-13',
             'Pantalla tactil de 6" de alta resolucion. Almacena 3 preajustes, '
             'ajuste de presion 0-9 y funcion de apagado automatico.'),
            ('Bandeja deslizante inferior',
             'Permite posicionar y retirar la prenda de forma comoda y segura '
             'sin exponer las manos a la zona caliente.'),
            ('Laser de posicionamiento',
             'Proyecta una linea de referencia sobre la prenda para alinear '
             'el diseno con precision antes de cada ciclo.'),
            ('Interruptor de seguridad de dos manos',
             'Requiere la activacion simultanea de ambas manos para iniciar el ciclo '
             'de prensado, evitando activaciones accidentales.'),
            ('Cubierta de proteccion termica',
             'Tapa protectora para cubrir la platina cuando la maquina esta en reposo '
             'o enfriandose.'),
        ],
        'safety_adv': [
            'No puentear ni desactivar el interruptor de seguridad de dos manos.',
            'No forzar manualmente el mecanismo de apertura/cierre electrico.',
        ],
        'safety_prec': [
            'Verificar que el apagado automatico responde antes de iniciar la jornada.',
            'Respetar el ajuste de presion maximo (9) — no sobrepasar para el material usado.',
        ],
        'safety_info': [
            'La bandeja deslizante inferior debe usarse siempre para cargar prendas.',
            'El laser de posicionamiento facilita la alineacion; verificarlo al inicio del dia.',
        ],
        'daily': [
            ('Diario', 'Verificar el interruptor de seguridad de dos manos',
             'Ambas manos necesarias para iniciar el ciclo; la maquina no arranca con una sola'),
            ('Diario', 'Comprobar el laser de posicionamiento',
             'El laser proyecta una linea nitida y alineada sobre la superficie de trabajo'),
            ('Diario', 'Verificar el apagado automatico del controlador GY-13',
             'La funcion se activa tras el tiempo de inactividad configurado'),
            ('Diario', 'Comprobar que la bandeja deslizante inferior entra y sale sin resistencia',
             'Deslizamiento suave, sin atascos ni deformaciones en la guia'),
        ],
        'weekly': [
            ('Semanal', 'Limpiar la platina de aluminio con producto adecuado para superficies calefactoras',
             'Superficie homogenea, sin residuos de tinta, papel ni sublimacion pegada'),
            ('Semanal', 'Verificar el sistema de varillas de empuje electricas',
             'Movimiento suave y simetrico, sin ruidos ni resistencia anormal'),
            ('Semanal', 'Limpiar el cabezal del laser de posicionamiento con pano seco',
             'Proyeccion nitida sin obstrucciones'),
            ('Semanal', 'Revisar el valor de presion configurado en el GY-13',
             'Valor coherente con los materiales en uso, dentro del rango 0-9'),
        ],
        'monthly': [
            ('Mensual', 'Verificar la uniformidad termica de la platina con termometro de infrarrojos',
             'Diferencia maxima de 5 C entre centro y bordes de la platina'),
            ('Mensual', 'Inspeccionar el mecanismo del motor electrico: rodamientos y varillas',
             'Sin holguras, vibraciones ni ruidos mecanicos durante el ciclo'),
        ],
    },

    'alina-plancha-para-tazas': {
        'specs': [
            ('Tipo de maquina',           'Prensa termica para tazas 4 en 1'),
            ('Tipo de apertura',          'Manual con mango ergonomico'),
            ('Tamanos compatibles',       '6oz, 10oz, 11-15oz, 12oz conica, 17oz conica, 20oz tumbler, 30oz tumbler'),
            ('Resistencias incluidas',    '4 intercambiables de intercambio rapido'),
            ('Ajuste de presion',         '4 perillas independientes (una por resistencia), giro horario = mas presion'),
            ('Control de temperatura',    'PID digital — distribucion de calor uniforme'),
            ('Controlador',               'GY-04 digital con ajuste de tiempo y temperatura'),
            ('Temporizador',              '1-999 s'),
            ('Temperatura maxima',        '225 C (437 F)'),
            ('Precision de temperatura',  '+/-0.5%'),
            ('Voltaje',                   '220V / 110V'),
            ('Frecuencia',                '50-60 Hz'),
            ('Potencia',                  '130 W (110V) / 260 W (220V)'),
            ('Peso',                      '12.75 kg'),
            ('Dimensiones de maquina',    '604 x 426 x 297 mm'),
            ('Estructura',                'Acero soldado solido'),
            ('Alarma automatica',         'Si — senal sonora al finalizar el ciclo'),
            ('Certificacion',             'CE'),
        ],
        'voltaje':  '220V / 110V',
        'potencia': '130 W (110V) / 260 W (220V)',
        'temp_max': '225 C',
        'timer':    '1-999 s',
        'plato':    '4 resistencias: 6oz / 10oz / 11-15oz / 12-17oz conica / 20-30oz tumbler',
        'peso':     '12.75 kg',
        'control':  'GY-04 digital con PID',
        'components': [
            ('Resistencia 6-10oz',
             'Elemento calefactor cilindrico para tazas de 6 a 10oz. '
             'Intercambiable rapidamente. Perilla de presion independiente.'),
            ('Resistencia 11-15oz',
             'Elemento calefactor cilindrico para tazas estandar de 11 a 15oz. '
             'El mas utilizado para tazas de sublimacion clasicas. Perilla propia.'),
            ('Resistencia conica 12oz / 17oz',
             'Elemento calefactor con perfil conico para tazas troncoconicas de 12oz y 17oz. '
             'Ajuste de presion mediante perilla dedicada.'),
            ('Resistencia tumbler 20oz / 30oz',
             'Elemento calefactor de gran tamano (Super Big) para tumblers rectos y slim '
             'de 20oz y 30oz. Admite disenos de envoltura completa.'),
            ('Controlador GY-04 con PID',
             'Panel digital con control PID para temperatura precisa y estable. '
             'Temporizador 1-999 s, alarma sonora automatica al finalizar el ciclo.'),
            ('4 perillas de ajuste de presion',
             'Una perilla por resistencia. Giro horario aumenta la presion; antihorario la reduce. '
             'Para calibracion: colocar taza en almohadilla de silicona y ajustar con la manija bajada.'),
            ('Mango ergonomico',
             'Mango de agarre robusto con diseno ergonomico para reducir la fatiga '
             'en uso continuo. Facilita la aplicacion de presion uniforme.'),
            ('Estructura de acero soldado',
             'Chasis rigido de acero solido que garantiza la estabilidad y alineacion '
             'de la resistencia durante el ciclo de prensado.'),
        ],
        'safety_adv': [
            'Las resistencias alcanzan hasta 225 C. Nunca tocar sin guantes termicos.',
            'Esperar enfriamiento completo antes de cambiar de resistencia.',
            'No forzar el intercambio de resistencias con la maquina caliente.',
        ],
        'safety_prec': [
            'Verificar el correcto acoplamiento de la resistencia antes de cada ciclo.',
            'No usar tazas sin recubrimiento de sublimacion o con recubrimiento danado.',
            'Ajustar la presion con la taza colocada sobre almohadilla de silicona.',
            'Respetar los tiempos de ciclo por tamano de taza para evitar quemaduras o resultados deficientes.',
        ],
        'safety_info': [
            'Cada resistencia tiene rango de tamano especifico. No forzar tazas fuera de rango.',
            'La alarma automatica indica fin de ciclo — no ignorarla ni desactivarla.',
            'Guardar las resistencias no montadas en lugar seco, sin golpes ni humedad.',
        ],
        'daily': [
            ('Diario', 'Inspeccionar visualmente la resistencia montada antes de iniciar',
             'Sin danos, oxidacion, deformaciones ni residuos pegados en la superficie'),
            ('Diario', 'Comprobar el acoplamiento correcto de la resistencia activa',
             'Resistencia firmemente sujeta, sin holguras ni movimiento lateral'),
            ('Diario', 'Verificar la alarma automatica al terminar el primer ciclo',
             'Alarma suena correctamente; la temperatura cae al desconectar'),
            ('Diario', 'Revisar la lectura del controlador GY-04 con PID',
             'Temperatura estable en pantalla, sin errores ni fluctuaciones anomalas'),
            ('Diario', 'Comprobar las 4 perillas de presion — sin juego ni danos',
             'Perillas giratorias sin bloqueo; ajuste fluido en ambos sentidos'),
        ],
        'weekly': [
            ('Semanal', 'Limpiar el exterior de las 4 resistencias con pano seco',
             'Superficies libres de residuos de sublimacion, tinta o papel'),
            ('Semanal', 'Inspeccionar los conectores electricos de cada resistencia',
             'Sin corrosion, deformacion ni signos de sobrecalentamiento en terminales'),
            ('Semanal', 'Verificar el mecanismo de intercambio rapido de resistencias',
             'Acoplamiento y desacoplamiento fluidos, sin desgaste visible'),
            ('Semanal', 'Calibrar el controlador PID con termometro de contacto externo',
             'Diferencia maxima de 3 C entre lectura del GY-04 y referencia externa'),
            ('Semanal', 'Limpiar las almohadillas de silicona de apoyo',
             'Sin deformaciones ni residuos que afecten al ajuste de presion'),
        ],
        'monthly': [
            ('Mensual', 'Prueba de uniformidad termica de cada resistencia con termometro de infrarrojos',
             'Temperatura homogenea en toda la superficie; diferencia maxima de 5 C'),
            ('Mensual', 'Inspeccionar cables y conexiones de cada resistencia',
             'Sin cables pelados, dobleces permanentes ni puntos calientes'),
            ('Mensual', 'Revisar estructura de acero: soldaduras, tornillos y base',
             'Sin corrosion, fisuras ni elementos flojos en la estructura'),
            ('Mensual', 'Verificar el mango ergonomico: sujecion y estado del revestimiento',
             'Mango firme al chasis, sin grietas ni desgaste del revestimiento'),
        ],
    },
}


# ── PDF builder ────────────────────────────────────────────────────────────────
def build_pdf(machine, output_path, enriched=None):
    enriched   = enriched or {}
    slug       = machine['slug']
    name_es    = machine.get('name_es', slug)
    category   = machine.get('category', '')
    opening    = machine.get('opening_type', '')
    # Prefer enriched specs, fall back to auto-parsed
    specs      = enriched.get('specs') or machine.get('specs', [])
    components = enriched.get('components', [])

    # Quick-ref values: enriched overrides first, then auto-detect from specs
    voltaje  = enriched.get('voltaje')  or spec_val(specs, 'voltaje', 'voltage')
    potencia = enriched.get('potencia') or spec_val(specs, 'potencia', 'power')
    temp_max = enriched.get('temp_max') or spec_val(specs, 'temperatura maxima', 'maximum temp', 'temp')
    timer    = enriched.get('timer')    or spec_val(specs, 'temporizador', 'timer', 'rango del temporizador')
    plato    = enriched.get('plato')    or spec_val(specs, 'tamano de platina', 'tamano del plato', 'platen size', 'platina', 'plate size')
    peso     = enriched.get('peso')     or spec_val(specs, 'peso neto', 'net weight')
    control  = enriched.get('control')  or spec_val(specs, 'controlador', 'controller', 'display')

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        rightMargin=MARGIN, leftMargin=MARGIN,
        topMargin=2.2*cm, bottomMargin=2.2*cm,
    )

    on_page = make_page_template(name_es)
    story = []

    # ── COVER ──────────────────────────────────────────────────────────────────
    # Black spacer area for cover
    cover_data = [
        [Paragraph(name_es.upper(), sTitle)],
        [Paragraph('Prensas térmicas para sublimación y transfer', sCover)],
        [Spacer(1, 0.5*cm)],
    ]
    cover_t = Table(cover_data, colWidths=[CONTENT_W])
    cover_t.setStyle(TableStyle([
        ('BACKGROUND',  (0, 0), (-1, -1), C_BLACK),
        ('TOPPADDING',  (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 12),
        ('ROUNDEDCORNERS', [4]),
    ]))
    story.append(Spacer(1, 1.5*cm))
    story.append(cover_t)
    story.append(Spacer(1, 0.5*cm))

    # Cover metadata table
    cover_meta = [
        [Paragraph('<b>Modelo / Ref.:</b>', sMeta), Paragraph(name_es, sMeta)],
        [Paragraph('<b>Categoría:</b>', sMeta),      Paragraph(category or '—', sMeta)],
        [Paragraph('<b>Tipo de apertura:</b>', sMeta),Paragraph(opening or '—', sMeta)],
        [Paragraph('<b>Fabricante:</b>', sMeta),      Paragraph('Beinsen', sMeta)],
        [Paragraph('<b>Documento:</b>', sMeta),        Paragraph('Libro de Mantenimiento', sMeta)],
        [Paragraph('<b>Versión:</b>', sMeta),          Paragraph('1.0', sMeta)],
        [Paragraph('<b>Fecha de emisión:</b>', sMeta), Paragraph('2025', sMeta)],
    ]
    cm_t = Table(cover_meta, colWidths=[4.5*cm, CONTENT_W-4.5*cm])
    cm_t.setStyle(TableStyle([
        ('GRID',        (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
        ('TOPPADDING',  (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(cm_t)
    story.append(Spacer(1, 0.8*cm))

    # Internal document notice
    notice_data = [[Paragraph(
        '<b>DOCUMENTO DE USO INTERNO</b><br/>'
        'Este libro de mantenimiento es propiedad de Beinsen y está destinado '
        'exclusivamente para uso del personal autorizado. Queda prohibida su '
        'reproducción total o parcial sin autorización expresa.',
        sSmall
    )]]
    notice_t = Table(notice_data, colWidths=[CONTENT_W])
    notice_t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#FFF3CD')),
        ('BOX',        (0, 0), (-1, -1), 1, C_ORANGE),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING',(0, 0), (-1, -1), 10),
    ]))
    story.append(notice_t)
    story.append(PageBreak())

    # ── TABLE OF CONTENTS ──────────────────────────────────────────────────────
    story.append(Paragraph('<b>ÍNDICE DE CONTENIDOS</b>', sSubT))
    story.append(Spacer(1, 0.3*cm))
    toc_items = [
        ('1', 'Identificación del equipo'),
        ('2', 'Normas de seguridad'),
        ('3', 'Checklist diario'),
        ('4', 'Checklist semanal'),
        ('5', 'Checklist mensual'),
        ('6', 'Checklist trimestral'),
        ('7', 'Checklist semestral y anual'),
        ('8', 'Registro de intervenciones'),
        ('9', 'Registro de piezas sustituidas'),
        ('10','Contacto y soporte técnico'),
    ]
    toc_data = []
    for num, title in toc_items:
        row = [
            Paragraph(f'<b>{num}</b>', sCenter),
            Paragraph(title, sTOC),
            Paragraph('· · · · · · · · · · · ·', sCenter),
        ]
        toc_data.append(row)
    toc_t = Table(toc_data, colWidths=[1.0*cm, 10*cm, CONTENT_W-11*cm])
    toc_t.setStyle(TableStyle([
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_WHITE, C_LGRAY]),
        ('TOPPADDING',    (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING',   (0, 0), (-1, -1), 8),
        ('LINEBELOW',     (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('FONTNAME',      (0, 0), (0, -1), 'Helvetica-Bold'),
        ('TEXTCOLOR',     (0, 0), (0, -1), C_ORANGE),
    ]))
    story.append(toc_t)
    story.append(PageBreak())

    # ── SECTION 1 — IDENTIFICACIÓN DEL EQUIPO ─────────────────────────────────
    section_break(story, '01', 'IDENTIFICACIÓN DEL EQUIPO')
    id_data = [
        ['Modelo',           name_es,  'N° de serie',    ''],
        ['Tipo / Categoría', category, 'Fecha instalación',''],
        ['Tipo de apertura', opening,  'Ubicación',       ''],
        ['Fabricante',       'Beinsen S.L.',  'Técnico responsable',''],
    ]
    id_t = Table(
        [[Paragraph(f'<b>{r[0]}</b>', sMetaB), Paragraph(r[1], sMeta),
          Paragraph(f'<b>{r[2]}</b>', sMetaB), Paragraph(r[3], sMeta)]
         for r in id_data],
        colWidths=[3.5*cm, 6.0*cm, 3.5*cm, CONTENT_W-13.0*cm]
    )
    id_t.setStyle(TableStyle([
        ('GRID',           (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
        ('TOPPADDING',     (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING',  (0, 0), (-1, -1), 5),
        ('LEFTPADDING',    (0, 0), (-1, -1), 5),
    ]))
    story.append(id_t)
    story.append(Spacer(1, 0.4*cm))
    story.append(Paragraph('<b>Especificaciones técnicas de referencia rápida</b>', sH2))
    story.append(Spacer(1, 0.2*cm))

    # Quick specs 2-column grid
    quick = [
        ('Voltaje', voltaje),
        ('Potencia', potencia),
        ('Temperatura máxima', temp_max),
        ('Temporizador', timer),
        ('Tamaño de plato', plato),
        ('Peso neto', peso),
        ('Controlador', control),
        ('Tipo de apertura', opening or '—'),
    ]
    # Pair them up
    pairs = [(quick[i], quick[i+1] if i+1 < len(quick) else ('', ''))
             for i in range(0, len(quick), 2)]
    q_data = []
    for (l1, v1), (l2, v2) in pairs:
        q_data.append([
            Paragraph(f'<b>{l1}</b>', sMetaB), Paragraph(v1, sMeta),
            Paragraph(f'<b>{l2}</b>', sMetaB), Paragraph(v2, sMeta),
        ])
    if q_data:
        q_t = Table(q_data, colWidths=[3.5*cm, 5.0*cm, 3.5*cm, CONTENT_W-12.0*cm])
        q_t.setStyle(TableStyle([
            ('GRID',           (0, 0), (-1, -1), 0.5, C_MGRAY),
            ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
            ('TOPPADDING',     (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING',  (0, 0), (-1, -1), 4),
            ('LEFTPADDING',    (0, 0), (-1, -1), 5),
        ]))
        story.append(q_t)

    # Full specs table
    if specs:
        story.append(Spacer(1, 0.4*cm))
        story.append(Paragraph('<b>Especificaciones técnicas completas</b>', sH2))
        story.append(Spacer(1, 0.2*cm))
        spec_data = [[Paragraph(f'<b>{l}</b>', sMetaB), Paragraph(v, sMeta)] for l, v in specs]
        sp_t = Table(spec_data, colWidths=[6.0*cm, CONTENT_W-6.0*cm])
        sp_t.setStyle(TableStyle([
            ('GRID',           (0, 0), (-1, -1), 0.5, C_MGRAY),
            ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
            ('TOPPADDING',     (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING',  (0, 0), (-1, -1), 4),
            ('LEFTPADDING',    (0, 0), (-1, -1), 5),
        ]))
        story.append(sp_t)

    # Components section (only when enriched data provides it)
    if components:
        story.append(Spacer(1, 0.4*cm))
        story.append(Paragraph('<b>Componentes principales</b>', sH2))
        story.append(Spacer(1, 0.2*cm))
        comp_data = [
            [Paragraph(f'<b>{name}</b>', sMetaB), Paragraph(desc, sMeta)]
            for name, desc in components
        ]
        comp_t = Table(comp_data, colWidths=[4.5*cm, CONTENT_W-4.5*cm])
        comp_t.setStyle(TableStyle([
            ('GRID',           (0, 0), (-1, -1), 0.5, C_MGRAY),
            ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
            ('TOPPADDING',     (0, 0), (-1, -1), 5),
            ('BOTTOMPADDING',  (0, 0), (-1, -1), 5),
            ('LEFTPADDING',    (0, 0), (-1, -1), 5),
            ('VALIGN',         (0, 0), (-1, -1), 'TOP'),
        ]))
        story.append(comp_t)

    story.append(PageBreak())

    # ── SECTION 2 — NORMAS DE SEGURIDAD ────────────────────────────────────────
    section_break(story, '02', 'NORMAS DE SEGURIDAD')
    story.append(AlertBox('ADVERTENCIA', [
        'Desconectar siempre la maquina de la red electrica antes de cualquier intervencion.',
        'No dejar la maquina sin supervision con la placa caliente.',
        'Riesgo de quemaduras: no tocar la placa superior o inferior sin proteccion.',
        'No utilizar la maquina en espacios sin ventilacion adecuada.',
    ] + enriched.get('safety_adv', [])))
    story.append(Spacer(1, 0.3*cm))
    story.append(AlertBox('PRECAUCION', [
        'Respetar los tiempos de calentamiento y enfriamiento indicados.',
        'No forzar el mecanismo de apertura/cierre.',
        'Verificar que los papeles de sublimacion no presenten humedad excesiva.',
        'No superar los valores maximos de temperatura y presion indicados.',
        'Limpiar unicamente con productos aprobados para equipos electronicos.',
    ] + enriched.get('safety_prec', [])))
    story.append(Spacer(1, 0.3*cm))
    story.append(AlertBox('INFORMACION', [
        'Calibrar el controlador digital al inicio de cada jornada.',
        'Utilizar siempre almohadillas de teflon o algodon certificadas Beinsen.',
        'Conservar este libro en un lugar accesible para el personal tecnico.',
        'Registrar toda intervencion en la seccion correspondiente.',
    ] + enriched.get('safety_info', [])))
    story.append(Spacer(1, 0.4*cm))
    story.append(Paragraph('<b>Lista de verificación pre-intervención</b>', sH2))
    story.append(Spacer(1, 0.2*cm))
    pre_data = [
        ['□', 'Máquina desconectada de la red eléctrica'],
        ['□', 'Temperatura de la placa inferior a 40 °C (verificado con termómetro)'],
        ['□', 'EPI puestos: guantes de protección térmica y gafas de seguridad'],
        ['□', 'Área de trabajo limpia y sin materiales inflamables'],
        ['□', 'Herramientas necesarias preparadas y revisadas'],
        ['□', 'Consultar manual de usuario antes de intervenciones no rutinarias'],
    ]
    pre_t = Table(
        [[Paragraph(a, sBold), Paragraph(b, sNormal)] for a, b in pre_data],
        colWidths=[0.6*cm, CONTENT_W-0.6*cm]
    )
    pre_t.setStyle(TableStyle([
        ('TOPPADDING',    (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW',     (0, 0), (-1, -1), 0.5, C_LGRAY),
    ]))
    story.append(pre_t)
    story.append(PageBreak())

    # ── SECTION 3 — CHECKLIST DIARIO ───────────────────────────────────────────
    section_break(story, '03', 'CHECKLIST DIARIO')
    checklist_table(story, enriched.get('daily', []) + [
        ('Diario', 'Inspeccion visual de la placa superior e inferior', 'Sin manchas, quemaduras ni residuos visibles'),
        ('Diario', 'Verificar lectura de temperatura en el controlador', 'Temperatura estable, sin parpadeos ni errores'),
        ('Diario', 'Comprobar funcionamiento del temporizador', 'El temporizador cuenta y detiene correctamente'),
        ('Diario', 'Revisar el estado de la almohadilla protectora', 'Sin deformaciones, quemaduras ni desgaste excesivo'),
        ('Diario', 'Verificar que el sistema de apertura/cierre funciona correctamente', 'Sin atascamientos, ruidos ni resistencia anormal'),
        ('Diario', 'Limpiar superficies externas con pano seco', 'Sin polvo, residuos de papel ni manchas de tinta'),
        ('Diario', 'Comprobar ausencia de olores anomalos o humos', 'Ningun olor a quemado ni emision de humo'),
        ('Diario', 'Revisar cable de alimentacion y enchufes', 'Sin danos visibles, cortes ni deformaciones'),
    ])
    story.append(PageBreak())

    # ── SECTION 4 — CHECKLIST SEMANAL ──────────────────────────────────────────
    section_break(story, '04', 'CHECKLIST SEMANAL')
    checklist_table(story, enriched.get('weekly', []) + [
        ('Semanal', 'Limpieza profunda de las placas con pano de teflon', 'Placa uniforme, sin residuos de tinta ni papel pegado'),
        ('Semanal', 'Verificar y ajustar la presion del sistema de cierre', 'Presion uniforme en toda la superficie del plato'),
        ('Semanal', 'Calibracion de temperatura con termometro externo', 'Desviacion maxima de 5 C respecto al controlador'),
        ('Semanal', 'Revisar tornillos y piezas de sujecion de la estructura', 'Sin tornillos flojos ni deformaciones en la estructura'),
        ('Semanal', 'Inspeccionar el estado de las almohadillas (cambiar si necesario)', 'Almohadilla sin quemaduras ni deformacion permanente'),
        ('Semanal', 'Comprobar que los sensores y termometros no esten obstruidos', 'Sensores limpios y sin obstrucciones'),
        ('Semanal', 'Revisar las conexiones electricas internas accesibles', 'Conexiones firmes, sin signos de corrosion ni sobrecalentamiento'),
    ])
    story.append(PageBreak())

    # ── SECTION 5 — CHECKLIST MENSUAL ──────────────────────────────────────────
    section_break(story, '05', 'CHECKLIST MENSUAL')
    checklist_table(story, enriched.get('monthly', []) + [
        ('Mensual', 'Desmontaje y limpieza profunda de componentes accesibles', 'Componentes limpios y libres de polvo y residuos'),
        ('Mensual', 'Verificar y lubricar mecanismo de apertura (si aplica)', 'Movimiento suave y sin resistencia'),
        ('Mensual', 'Comprobacion del sistema electrico: cables, conectores', 'Sin cables pelados, conectores oxidados ni puntos calientes'),
        ('Mensual', 'Verificacion del estado del elemento calefactor', 'Temperatura homogenea en toda la superficie'),
        ('Mensual', 'Revision del controlador digital: calibracion y funciones', 'Todas las funciones operativas, sin errores en pantalla'),
        ('Mensual', 'Inspeccion de piezas de desgaste: bisagras, muelles, sellados', 'Sin desgaste excesivo ni piezas danadas'),
        ('Mensual', 'Actualizar el registro de intervenciones con las observaciones', 'Registro actualizado con fecha, tecnico y observaciones'),
    ])
    story.append(PageBreak())

    # ── SECTION 6 — CHECKLIST TRIMESTRAL ───────────────────────────────────────
    section_break(story, '06', 'CHECKLIST TRIMESTRAL')
    checklist_table(story, [
        ('Trimestral', 'Revisión general de la estructura mecánica completa', 'Sin fisuras, deformaciones ni puntos de fatiga del material'),
        ('Trimestral', 'Verificación del sistema de seguridad (termostato de corte)', 'El termostato actúa correctamente ante sobre-temperaturas'),
        ('Trimestral', 'Prueba de funcionamiento en ciclos continuos (1 hora)', 'Temperatura estable, sin variaciones superiores a ±10 °C'),
        ('Trimestral', 'Comprobar estado de la resistencia calefactora', 'Resistencia homogénea, sin zonas frías o puntos calientes'),
        ('Trimestral', 'Revisión y apriete de todas las conexiones eléctricas', 'Todas las conexiones firmes y con aislamiento correcto'),
        ('Trimestral', 'Verificar estado del panel de control e indicadores', 'Pantalla legible, botones y selectores operativos'),
        ('Trimestral', 'Revisar el estado del cable de alimentación principal', 'Sin deterioro, flexibilidad adecuada y sin exposición de conductores'),
    ])
    story.append(PageBreak())

    # ── SECTION 7 — CHECKLIST SEMESTRAL Y ANUAL ────────────────────────────────
    section_break(story, '07', 'CHECKLIST SEMESTRAL Y ANUAL')
    story.append(Paragraph('<b>Semestral</b>', sH2))
    story.append(Spacer(1, 0.15*cm))
    checklist_table(story, [
        ('Semestral', 'Revisión completa por técnico certificado Beinsen', 'Informe técnico emitido y archivado'),
        ('Semestral', 'Verificación de la precisión del sensor de temperatura', 'Desviación inferior a ±3 °C respecto a termómetro de referencia'),
        ('Semestral', 'Inspección del aislamiento térmico y eléctrico', 'Sin degradación del aislamiento, sin riesgo de contacto'),
        ('Semestral', 'Comprobar estado de la placa calefactora (uniformidad)', 'Distribución de calor homogénea verificada con cámara térmica'),
    ])
    story.append(Paragraph('<b>Anual</b>', sH2))
    story.append(Spacer(1, 0.15*cm))
    checklist_table(story, [
        ('Anual', 'Revisión y sustitución preventiva de piezas de desgaste', 'Piezas sustituidas registradas en sección 9'),
        ('Anual', 'Verificación de cumplimiento de normativas de seguridad', 'Conformidad con normativa CE vigente verificada'),
        ('Anual', 'Actualización de firmware/software del controlador (si disponible)', 'Versión de firmware actualizada o confirmada como vigente'),
        ('Anual', 'Prueba de carga al 100% durante 4 horas consecutivas', 'Sin incidencias térmicas ni mecánicas durante la prueba'),
        ('Anual', 'Elaboración de informe anual de mantenimiento', 'Informe firmado por técnico responsable y archivado'),
    ])
    story.append(PageBreak())

    # ── SECTION 8 — REGISTRO DE INTERVENCIONES ────────────────────────────────
    section_break(story, '08', 'REGISTRO DE INTERVENCIONES')
    story.append(Paragraph(
        'Registrar todas las intervenciones realizadas en el equipo: '
        'mantenimientos preventivos, correctivos, ajustes y revisiones.',
        sSmall
    ))
    story.append(Spacer(1, 0.3*cm))
    registro_table(story, rows=18)
    story.append(PageBreak())

    # Page 2 of registro
    section_break(story, '08', 'REGISTRO DE INTERVENCIONES (continuación)')
    registro_table(story, rows=22)
    story.append(PageBreak())

    # ── SECTION 9 — REGISTRO DE PIEZAS SUSTITUIDAS ────────────────────────────
    section_break(story, '09', 'REGISTRO DE PIEZAS SUSTITUIDAS')
    story.append(Paragraph(
        'Registrar todas las piezas sustituidas indicando referencia, motivo y técnico responsable.',
        sSmall
    ))
    story.append(Spacer(1, 0.3*cm))
    piezas_table(story, rows=22)
    story.append(PageBreak())

    # ── SECTION 10 — CONTACTO Y SOPORTE TÉCNICO ────────────────────────────────
    section_break(story, '10', 'CONTACTO Y SOPORTE TÉCNICO')
    story.append(Spacer(1, 0.3*cm))

    contact_info = [
        ['Web',         'www.beinsen.com'],
        ['Email',       'info@beinsen.com'],
        ['Telefono',    '+34 900 000 000'],
        ['Direccion',   'Espana'],
        ['Horario SAT', 'Lun-Vie  9:00-18:00 (CET)'],
    ]
    c_t = Table(
        [[Paragraph(f'<b>{k}</b>', sMetaB), Paragraph(v, sMeta)] for k, v in contact_info],
        colWidths=[3.5*cm, CONTENT_W-3.5*cm]
    )
    c_t.setStyle(TableStyle([
        ('GRID',           (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [C_LGRAY, C_WHITE]),
        ('TOPPADDING',     (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING',  (0, 0), (-1, -1), 6),
        ('LEFTPADDING',    (0, 0), (-1, -1), 8),
    ]))
    story.append(c_t)
    story.append(Spacer(1, 0.5*cm))
    story.append(Paragraph(
        '<b>Soporte técnico</b>',
        sH2
    ))
    story.append(Spacer(1, 0.2*cm))
    story.append(Paragraph(
        'Para solicitar soporte técnico, indicar siempre: número de serie del equipo, '
        'descripción del problema o intervención realizada, y la fecha del incidente.',
        sNormal
    ))
    story.append(Spacer(1, 0.5*cm))
    story.append(Paragraph(
        '<b>Piezas de repuesto</b>',
        sH2
    ))
    story.append(Spacer(1, 0.2*cm))
    story.append(Paragraph(
        'Las piezas de repuesto originales Beinsen pueden solicitarse a través del '
        'portal web o contactando directamente con el servicio técnico. '
        'El uso de piezas no originales puede anular la garantía del equipo.',
        sNormal
    ))
    story.append(Spacer(1, 0.5*cm))

    disclaimer_data = [[Paragraph(
        '<b>Aviso legal</b><br/>'
        'Beinsen S.L. no se hace responsable de los daños causados por un '
        'mantenimiento incorrecto o por el uso de piezas no originales. '
        'Este documento es de uso exclusivo del personal técnico autorizado. '
        'Queda prohibida su reproducción sin autorización expresa de Beinsen S.L.',
        sSmall
    )]]
    disc_t = Table(disclaimer_data, colWidths=[CONTENT_W])
    disc_t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), C_LGRAY),
        ('BOX',        (0, 0), (-1, -1), 0.5, C_MGRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING',(0, 0), (-1, -1), 10),
    ]))
    story.append(disc_t)

    # Build PDF
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f'  OK  {os.path.basename(output_path)}')


# ── Main ────────────────────────────────────────────────────────────────────────
def main():
    # Optional: pass a slug to regenerate only one machine
    # e.g.  python generate-maintenance-books.py alaska-plancha-termica-textil
    only_slug = sys.argv[1] if len(sys.argv) > 1 else None

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ts_path  = os.path.join(base_dir, 'data', 'planchas.ts')
    dl_root  = os.path.join(base_dir, 'public', 'downloads')

    print('Parsing machine data...')
    machines = parse_machines(ts_path)
    print(f'Found {len(machines)} machines in planchas.ts')

    slug_map = {m['slug']: m for m in machines}
    skip     = {'obrei-plancha-gorras-apertura-automatica'}

    generated = 0
    skipped   = 0
    missing   = []

    for folder in sorted(os.listdir(dl_root)):
        folder_path = os.path.join(dl_root, folder)
        if not os.path.isdir(folder_path):
            continue
        if only_slug and folder != only_slug:
            continue
        if folder in skip:
            print(f'  --  {folder}  (skipped)')
            skipped += 1
            continue

        machine = slug_map.get(folder)
        if not machine:
            for slug, m in slug_map.items():
                if folder.split('-')[0] in slug:
                    machine = m
                    break

        if not machine:
            missing.append(folder)
            print(f'  ?  {folder}  (no machine data found)')
            continue

        machine_name = machine.get('name_es', folder)
        safe_name = re.sub(r'[^\w\s-]', '', machine_name).strip().replace(' ', '_')
        pdf_name  = f'Libro_Mantenimiento_{safe_name}_Beinsen.pdf'
        out_path  = os.path.join(folder_path, pdf_name)

        enriched = ENRICHED.get(folder, {})
        build_pdf(machine, out_path, enriched=enriched)
        generated += 1

    print(f'\nDone: {generated} PDFs generated, {skipped} skipped, {len(missing)} missing data.')
    if missing:
        print('Missing machine data for:', missing)


if __name__ == '__main__':
    main()
