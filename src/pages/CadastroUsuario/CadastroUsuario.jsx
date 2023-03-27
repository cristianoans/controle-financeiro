import React, { useState } from 'react';
import './CadastroUsuario.css'
import capa from '../../assets/images/capa-cadastro.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


const schema = yup.object().shape({
    senha: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .matches(/[a-z]/, "A senha deve conter letras minúsculas")
        .matches(/[A-Z]/, "A senha deve conter letras maiúsculas")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial"),
});

function CadastroUsuario() {

    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm({
        resolver: yupResolver(schema),
    });

    function formSubmit(data) {
        console.log(data);
    }

    function abrirModalPoliticaSenha() {
        Swal.fire({
            title: 'Política de Senha',
            html: `
            <ul class="politica list-group list-group-flush">
              <li class="list-group-item">A senha deve ter pelo menos 8 caracteres</li>
              <li class="list-group-item">A senha deve conter letras maiúsculas e minúsculas</li>
              <li class="list-group-item">A senha deve conter pelo menos um caractere especial</li>
            </ul>
          `,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'btn btn-outline-primary',
            },
            buttonsStyling: false
        })
    }


    return (
        <div className='container my-5'>

            <div className='d-flex flex-row flex-wrap g-0 align-items-center'>
                <div className='d-flex'>

                    <div className='card my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <div className='card-body p-5 shadow-5 text-center'>

                            <h2 className="fw-bold mb-5">Cadastre-se agora</h2>

                            <form onSubmit={handleSubmit(formSubmit)}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <input className='form-control' id='nome' type='text' {...register("nome", { require: true })} />
                                        <label className='form-label mb-4' htmlFor="nome">Nome</label>
                                    </div>

                                    <div className='col-6'>
                                        <input className='form-control' id='sobrenome' type='text' {...register("sobrenome", { require: true })} />
                                        <label className='form-label  mb-4' htmlFor="sobrenome">Sobrenome</label>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <input className='form-control' id='email' type='email' {...register("email", { require: true })} />
                                    <label className='form-label  mb-4' htmlFor="email">Email</label>
                                </div>
                                
                                <div className='col-12 align-items-center'>
                                    {errors.senha && <p className='text-danger'>{errors.senha.message}</p>}
                                    <input className='form-control' id='senha' type='password' {...register("senha")} />
                                    <label className='form-label  mb-4' htmlFor="senha">Senha</label>
                                    <img onMouseOver={abrirModalPoliticaSenha} className='icon ms-2' src="https://cdn-icons-png.flaticon.com/512/1001/1001008.png" alt="" />
                                </div>

                                <div className='d-flex justify-content-center mb-4'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" {...register("flexCheckChecked")} />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Se inscreva para nossa newsletter
                                        </label>
                                    </div>
                                </div>

                                <button className='btn btn-primary w-100 mb-4' type='submit'>cadastre-se</button>

                            </form>




                            <div className="text-center">
                                <p>ou inscreva-se com:</p>
                                <a className='mx-3 fs-2'><i className="bi bi-facebook"></i></a>
                                <a className='mx-3 fs-2'><i className="bi bi-twitter"></i></a>
                                <a className='mx-3 fs-2'><i className="bi bi-google"></i></a>
                                <a className='mx-3 fs-2'><i className="bi bi-github"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='d-flex'>
                    <img src={capa} className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>

            </div>

        </div>
    );
}

export default CadastroUsuario;