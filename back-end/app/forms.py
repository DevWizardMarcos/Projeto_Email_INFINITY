from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField, SubmitField
from wtforms.validators import DataRequired, Email

class ContactForm(FlaskForm):
    name = StringField("Nome")
    email = StringField("Email", validators=[Email(), DataRequired()])
    group = StringField("Grupo")
    submit = SubmitField("Salvar")

class EmailForm(FlaskForm):
    subject = StringField("Assunto", validators=[DataRequired()])
    content = TextAreaField("Mensagem", validators=[DataRequired()])
    image = FileField("Anexo")
    submit = SubmitField("Enviar")
