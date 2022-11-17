import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import '../../styles/admin/Dashboard.css'

export const Dashboard = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <h1 className="my-4">Administracion</h1>

                        <Fragment>
                            <MetaData title={'Administracion'} />
                            
                            <div className="row pr-4 cards-u">
                                <div className="col-xl-2 col-sm-6 mb-3">
                                    <div className="card text-white card-u-1">
                                        <div className="card-body info-cards">
                                            <div className="text-center card-font-size">123<br /> <b class="text-u-1">Productos</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-2 col-sm-6 mb-3">
                                    <div className="card text-white card-u-2">
                                        <div className="card-body info-cards">
                                        <div className="text-center card-font-size">35<br /> <b class="text-u-2">Pedidos</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-2 col-sm-6 mb-3">
                                    <div className="card text-white card-u-3">
                                        <div className="card-body info-cards">
                                        <div className="text-center card-font-size">12<br /> <b class="text-u-3">Usuarios</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-2 col-sm-6 mb-3">
                                    <div className="card text-white card-u-4">
                                        <div className="card-body info-cards">
                                        <div className="text-center card-font-size">12<br /> <b class="text-u-4">Agotados</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>




                            </div>
                            <div className="row pr-4 cards-u">
                            <div className="col-xl-4 col-sm-6 mb-3 ">
                                <div className="card text-white card-u-5">
                                    <div className="card-body info-cards">
                                    <div className="text-center card-font-size">12<br /> <b class="text-u-5">Ventas Totales</b></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Fragment>
                    

                </div>
            </div>

        </Fragment >
    )
}


    


export default Dashboard