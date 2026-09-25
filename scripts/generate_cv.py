import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

root = r"d:\PROTFLIO"
dest_paths = [
    os.path.join(root, "asset", "Mostafa_Magdy_CV.pdf"),
    os.path.join(root, "public", "asset", "Mostafa_Magdy_CV.pdf"),
    os.path.join(root, "public", "Mostafa_Magdy_CV.pdf"),
    os.path.join(root, "public", "cv.pdf"),
]

for p in dest_paths:
    os.makedirs(os.path.dirname(p), exist_ok=True)

primary_dest = dest_paths[0]

doc = SimpleDocTemplate(
    primary_dest,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom styles
primary_color = colors.HexColor("#0B1E3D")
accent_color = colors.HexColor("#2563EB")
text_dark = colors.HexColor("#1E293B")
text_muted = colors.HexColor("#475569")
line_color = colors.HexColor("#CBD5E1")

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=24,
    textColor=primary_color,
    spaceAfter=2
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=accent_color,
    spaceAfter=4
)

contact_style = ParagraphStyle(
    'ContactInfo',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=text_muted,
    spaceAfter=6
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=11.5,
    leading=14,
    textColor=primary_color,
    spaceBefore=5,
    spaceAfter=2
)

job_title = ParagraphStyle(
    'JobTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=text_dark
)

job_meta = ParagraphStyle(
    'JobMeta',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=8.5,
    leading=11,
    textColor=text_muted
)

body_text = ParagraphStyle(
    'Body',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=text_dark,
    spaceAfter=3
)

bullet_text = ParagraphStyle(
    'Bullet',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=11,
    textColor=text_dark,
    leftIndent=10,
    firstLineIndent=-6,
    spaceAfter=1.5
)

elements = []

# Header
elements.append(Paragraph("Mostafa Magdy Abdelhamid Ramadan", title_style))
elements.append(Paragraph("Data Science & AI Automation Engineer", subtitle_style))
elements.append(Paragraph("Cairo, Egypt &nbsp;•&nbsp; +20 115 979 8258 &nbsp;•&nbsp; mostafaamagdyy927@gmail.com &nbsp;•&nbsp; linkedin.com/in/mostafa-magdy &nbsp;•&nbsp; github.com/mostafaamagdyy927-wq", contact_style))
elements.append(HRFlowable(width="100%", thickness=1, color=accent_color, spaceAfter=5, spaceBefore=1))

# Summary
elements.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))
elements.append(Paragraph("Fourth-year Data Science student at Helwan University's Faculty of International Technology in Cairo with an <b>Excellent (Emtiaz)</b> academic standing ranked among the top of the cohort in every term to date. DEPI Data Engineer Trainee (Cohort 5) under Egypt's Ministry of Communications and Information Technology (MCIT). Freelance AI Automation Developer on Khamsat and Mostaql, designing and deploying end-to-end data pipelines, predictive machine learning models, WhatsApp booking assistants, AI outbound calling bots, and multi-agent AI systems for real clients.", body_text))

# Education
elements.append(Paragraph("EDUCATION", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))
elements.append(Paragraph("<b>B.Sc. in Data Science</b> | Helwan University, Faculty of International Technology (Expected 2027)", job_title))
elements.append(Paragraph("• Academic Standing: <b>Excellent (Emtiaz)</b> — Ranked among top students with Excellent marks in every semester.", bullet_text))
elements.append(Paragraph("• Coursework: Machine Learning, Data Analysis, Statistics, Databases (SQL), Data Structures, Algorithms, Python Programming.", bullet_text))

# Experience
elements.append(Paragraph("EXPERIENCE & TRAINING", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))

elements.append(Paragraph("<b>Data Engineer Trainee — Digital Egypt Pioneers Initiative (DEPI, Cohort 5)</b>", job_title))
elements.append(Paragraph("Ministry of Communications and Information Technology (MCIT), Cairo, Egypt &nbsp;|&nbsp; 06/2026 – 01/2027", job_meta))
elements.append(Paragraph("• Completed intensive government-backed data engineering curriculum focused on ETL pipelines, relational databases, data warehousing, and applied analytics tools.", bullet_text))

elements.append(Paragraph("<b>Freelance AI Automation Developer & Data Analyst</b>", job_title))
elements.append(Paragraph("Self-Employed (Khamsat / Mostaql), Remote &nbsp;|&nbsp; 2026 – Present", job_meta))
elements.append(Paragraph("• Delivered end-to-end sales and customer-behavior analysis using Python and Excel, uncovering actionable profit drivers.", bullet_text))
elements.append(Paragraph("• Engineered AI WhatsApp booking assistants and outbound voice calling bots (n8n, Twilio, Meta Cloud API, Arabic TTS).", bullet_text))
elements.append(Paragraph("• Executed large-scale B2B lead generation sourcing 10,000+ verified records across 31 countries for fertilizer exporter.", bullet_text))
elements.append(Paragraph("• Collaborated on 5+ project initiatives affiliated with Egypt's MCIT ecosystem.", bullet_text))

# Key Projects
elements.append(Paragraph("FEATURED PROJECTS", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))
elements.append(Paragraph("• <b>Used Car Price Prediction Model (87% Accuracy):</b> Scraped Hatla2ee listings via Elasticsearch API; built complete ML pipeline comparing Random Forest vs Linear Regression with feature engineering.", bullet_text))
elements.append(Paragraph("• <b>AI Personal Executive Assistant ('Project O'):</b> Multi-agent architecture with 5 specialized sub-agents (Gmail, Google Calendar, Tasks, Contacts, Supabase) orchestrated via Claude API and Telegram bot interface.", bullet_text))
elements.append(Paragraph("• <b>SAIP: Smart Automotive Diagnostics Platform:</b> Accepted into national government competition; 12-person team; led predictive maintenance ML modeling on AI4I 2020 dataset and built responsive frontend in React/TypeScript.", bullet_text))
elements.append(Paragraph("• <b>AI WhatsApp Booking Assistant & Voice Calling Bots:</b> Production n8n automation workflows with OpenAI/Groq, Twilio, and Google Sheets integration.", bullet_text))
elements.append(Paragraph("• <b>Smart Gloves (Assistive IoT):</b> Gesture-to-speech system recognizing sign language alphabet using ESP32, Flex sensors, MPU6050, and Flask backend.", bullet_text))

# Technical Skills
elements.append(Paragraph("TECHNICAL SKILLS", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))
elements.append(Paragraph("• <b>Programming & Databases:</b> Python, SQL, PostgreSQL, SQLite, Supabase", bullet_text))
elements.append(Paragraph("• <b>Data Science & ML:</b> Pandas, NumPy, Scikit-learn, Data Cleaning, EDA, Model Evaluation, Excel", bullet_text))
elements.append(Paragraph("• <b>Data Engineering:</b> ETL Pipelines, Web Scraping (Apify, API-driven), REST APIs, Docker, Linux/VPS", bullet_text))
elements.append(Paragraph("• <b>AI & Automation:</b> n8n, Claude API, Multi-Agent Systems, OpenAI / Groq, Prompt Engineering, Telegram Bots", bullet_text))
elements.append(Paragraph("• <b>Integrations & Web:</b> Twilio, Meta WhatsApp Cloud API, ElevenLabs (Arabic TTS), Flask, Next.js, TypeScript", bullet_text))

# Certifications
elements.append(Paragraph("CERTIFICATIONS & HONORS", section_heading))
elements.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceAfter=3, spaceBefore=1))
elements.append(Paragraph("• <b>AWS AI Practitioner Challenge</b> — Udacity & Accenture (April 2026)", bullet_text))
elements.append(Paragraph("• <b>AWS AI & ML Scholars: Analyze Data using AI with PartyRock</b> — Udacity + AWS", bullet_text))
elements.append(Paragraph("• <b>Database Fundamentals & Python Programming Basics</b> — Mahara-Tech / ITI", bullet_text))
elements.append(Paragraph("• <b>Artificial Intelligence Course (20h)</b> — ITIDA, EME, QIS, CREATIVA", bullet_text))
elements.append(Paragraph("• <b>ITIDA Gigs 3-Month Freelance Training Program</b> — ITIDA & eYouth", bullet_text))
elements.append(Paragraph("• <b>Introduction to SQL</b> — DataCamp &nbsp;|&nbsp; <b>Object Oriented Programming</b> — IT Sharks (C-412967)", bullet_text))
elements.append(Paragraph("• <b>Tuwaiq Academy SATR Program</b>", bullet_text))

doc.build(elements)
print("Built primary CV at:", primary_dest)

import shutil
for extra in dest_paths[1:]:
    shutil.copy2(primary_dest, extra)
    print("Copied CV to:", extra)

print("CV generation complete.")
