from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///allaccess.db'
CORS(app)

db = SQLAlchemy(app)

class ToDo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }

@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, ToDo.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = ToDo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created successfully'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, ToDo.query.filter_by(id=id))])

if __name__ == '__main__':
    app.run(debug=True)