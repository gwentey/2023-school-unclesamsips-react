import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '../../../_services';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './User.css'
const UserEdit = () => {
    // navigation
    let navigate = useNavigate();

    const [user, setUser] = useState([]);
    // récupération de l'id dans l'url
    const { uid } = useParams();
    // permet de ne pas avoir un double appel
    const flag = useRef(false);

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault();
        userService
            .updateUser(user)
            .then((res) => {
                navigate('../index');
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        // permet de ne pas avoir un double appel
        if (flag.current === false) {
            userService
                .getUser(uid)
                .then((res) => {
                    console.log(res.data.data);
                    setUser(res.data.data);
                })
                .catch((err) => console.log(err));
        }
        // fonction de nettoyage permet de ne pas faire de double appel
        return () => (flag.current = true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="UserEdit mt-4">
            <Card style={{ maxWidth: '100%' }}>
                <Card.Header>
                    <h2>Editer un utilisateur</h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit} style={{marginTop:0, width: '30%'}}>
                        <Form.Group className="mb-3" controlId="formPseudo">
                            <Form.Label>Pseudo</Form.Label>
                            <Form.Control
                                type="text"
                                name="pseudo"
                                defaultValue={user.pseudo}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                defaultValue={user.email}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Modifier
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserEdit;
