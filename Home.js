import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <h4>Welcome Bonyface</h4>
                <Link to="/new-user" className="btn btn-primary">New user</Link>
            </div>
                <div className='body'>
                    <p className='text-left'>
                    CRISPY_TEMPLATE_PACK = 'bootstrap4'
                            For detailed instructions about how to install django-crispy-forms, please refer to this tutorial: How to Use Bootstrap 4 Forms With Django

                            Basic Form Rendering
                            The Python code required to represent the form above is the following:
                            from django import forms

                            STATES = (
                                ('', 'Choose...'),
                                ('MG', 'Minas Gerais'),
                                ('SP', 'Sao Paulo'),
                                ('RJ', 'Rio de Janeiro')
                            )
                                In this case I’m using a regular Form, but it could also be a ModelForm based on a
                                Django model with similar fields. The state field and the STATES choices could be either a foreign key or anything else. Here I’m just using a simple static example with three Brazilian states.
                    </p>
                </div>
            
        </div>
    </div>
  )
}

export default Home