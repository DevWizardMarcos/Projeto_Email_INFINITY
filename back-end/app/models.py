from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True, nullable=False)
    group = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "group": self.group,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

class EmailLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255))
    content = db.Column(db.Text)
    sent_at = db.Column(db.DateTime)
    recipients = db.Column(db.Integer)
    responses = db.Column(db.Integer, default=0)
