from flask import Blueprint, request, jsonify
from .models import Contact, db

api = Blueprint('api', __name__)

@api.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([c.to_dict() for c in contacts])

@api.route('/contacts', methods=['POST'])
def add_contact():
    data = request.get_json()
    contact = Contact(name=data['name'], email=data['email'])
    db.session.add(contact)
    db.session.commit()
    return jsonify(contact.to_dict()), 201