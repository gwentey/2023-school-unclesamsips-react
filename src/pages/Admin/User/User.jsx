import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../../../_services';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import './User.css'

const User = () => {
  const [users, setUsers] = useState([]);
  // permet de ne pas avoir un double appel
  const flag = useRef(false);

  useEffect(() => {
    // permet de ne pas avoir un double appel
    if (flag.current === false) {
      userService
        .getAllUsers()
        .then((res) => {
          console.log(res.data.data);
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    // fonction de nettoyage permet de ne pas faire de double appel
    return () => (flag.current = true);
  }, []);

  return (
    <div className="User mt-4">
      <Card style={{ maxWidth: '100%'}}>
        <Card.Header>
          <h2>Liste des utilisateurs</h2>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Pseudo</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link>
                  </td>
                  <td>{user.pseudo}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
