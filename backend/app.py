from flask import request, jsonify
from config import app, db
from model import mail


@app.route("/mail", methods=["GET"])
def get_mail():
    contacts = mail.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))

    return jsonify({"mail": contacts})


@app.route("/create-mail", methods=["POST"])
def create_mail():
    _id = request.json.get("id")
    _name = request.json.get("name")
    _email = request.json.get("email")
    _message = request.json.get("message")

    if not _id or not _name or _email or _message:
        return (
            jsonify({"message": "Must include _id,_name,_email,_message"}),
            400,
        )

    new_contact = mail(id=_id, _name=_name, email=_email, message=_message)

    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400  # Bad Request Erroe

    return jsonify({"message": "User created!"}), 201  # Successfully created Resource
