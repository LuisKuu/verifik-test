import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    NgForm,
    Validators
} from '@angular/forms';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    fuseAnimations
} from '@fuse/animations';
import {
    FuseAlertType
} from '@fuse/components/alert';
import {
    AuthService
} from 'app/core/auth/auth.service';
@Component({
    selector: 'signals',
    templateUrl: './signals.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SignalsComponent implements OnInit {
    //@ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: {
        type: FuseAlertType;
        message: string
    } = {
        type: 'success',
        message: ''
    };

    token = {authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IjYxYTE5MWYyMWYzYTE0MjI0NzZiN2QzNSIsInYiOjEsInJvbGUiOiJjbGllbnQiLCJwbGFuIjoiNjE2ZWVhNzc2MjEwZjY5NDkyZGY4MzNjIiwiaWF0IjoxNjM3OTc4NjEwfQ.Bmyv0f3yG6F--e6qTxCYOAhCqQurrjHQOZNgn9oO5xI"}
    //Demo Stats
    stats = {
        "pings": [
            {
                "endpoint": "/",
                "check": "05/05/1999 05:27 p.m.",
                "response": 200
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:53",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 200
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 19:54",
                "response": 401
            },
            {
                "endpoint": "runt/consultarConductor",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "runt/consultarVehiculo",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "runt/consultarVehiculoCompleto",
                "check": "11/26/21 20:5",
                "response": 500
            },
            {
                "endpoint": "procesos",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "simit/consultarSuspenciones",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "simit/consultarAcuerdos",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "simit/consultarResoluciones",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "simit/consultarComparendos",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "rues/consultarEmpresaPorNit",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "consultarNombres",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "procuraduria/antecedentes",
                "check": "11/26/21 20:5",
                "response": 404
            },
            {
                "endpoint": "interpol",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "ofac",
                "check": "11/26/21 20:5",
                "response": 200
            },
            {
                "endpoint": "afiliaciones",
                "check": "11/26/21 20:5",
                "response": 500
            }
        ]
    }

    endpoints = {
        "api":"https://api.verifik.co/v2/co/",
        "endpoints":[
            {
                "id": 1,
                "name":"RUNT",
                "list":[
                    {"title":"Conductor","endpoint":"runt/consultarConductor", "query": {"documentType":"CC","documentNumber":"123456789"}},
                    {"title":"Vehiculo","endpoint":"runt/consultarVehiculo", "query":{"documentType":"CC","documentNumber":"123456789"}},
                    {"title":"Vehiculo Completa","endpoint":"runt/consultarVehiculoCompleto", "query":{"plate":"123456"}},
                ]
            },
            {
                "id": 2,
                "name":"RAMA JUDICIAL",
                "list":[
                    {"title":"Procesos","endpoint":"procesos", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 3,
                "name":"SIMIT",
                "list":[
                    {"title":"Suspensiones","endpoint":"simit/consultarSuspenciones", "query":{"documentType":"CC","documentNumber":"123456789"}},
                    {"title":"Acuerdos","endpoint":"simit/consultarAcuerdos", "query":{"documentType":"CC","documentNumber":"123456789"}},
                    {"title":"Resoluciones","endpoint":"simit/consultarResoluciones", "query":{"documentType":"CC","documentNumber":"123456789"}},
                    {"title":"Comparendos","endpoint":"simit/consultarComparendos", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 4,
                "name":"RUES",
                "list":[
                    {"title":"empresa por NIT - RUES","endpoint":"rues/consultarEmpresaPorNit", "query":{"documentNumber":"123456789"}},
                ]
            },
            {
                "id": 5,
                "name":"REGISTRADURIA",
                "list":[
                    {"title":"Nombre Ciudadano o Extranjero","endpoint":"consultarNombres", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 6,
                "name":"Consulta antecedentes Procuraduría",
                "list":[
                    {"title":"Antecedentes Procuraduría","endpoint":"procuraduria/antecedentes", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 7,
                "name":"INTERPOL",
                "list":[
                    {"title":"Tarjeta roja Interpol","endpoint":"interpol", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 8,
                "name":"OFAC",
                "list":[
                    {"title":"OFAC","endpoint":"ofac", "query":{"documentType":"CC","documentNumber":"123456789"}},
                ]
            },
            {
                "id": 9,
                "name":"SISPRO",
                "list":[
                    {"title":"Afiliaciones","endpoint":"afiliaciones", "query":{"documentType":"CC","documentNumber":"123456789","date":"23/04/2020"}},
                ]
            },
        
    ]};

    getStats(endpoint) {
        let array = this.stats.pings.filter(p => p.endpoint == endpoint);
        let lastTwenty = array.slice(Math.max(array.length - 15, 1));
        return lastTwenty;
    }

    formatDate(date, format) {
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds()
        }
    
        return format.replace(/mm|dd|yy|m|s|h|yyy/gi, matched => map[matched])
    }
    async getPings() {
        let _cat = this.endpoints.endpoints
        let _fetchs = []
        _cat.forEach(cat => {        
            cat.list.forEach(e => {
                let url = new URL(this.endpoints.api+e.endpoint)
                Object.keys(e.query).forEach(key => url.searchParams.append(key, e.query[key]))
                _fetchs.push(fetch(url.toString(),{
                    headers: {
                        Authorization: this.token.authorization
                    }
                }))
            });
        })
        return await Promise.all(_fetchs)
    }
    getInfo(bar)
    {
        let str = this.getTextOp(bar.response)+"\n"
        str += "Ultima Actividad: "+bar.check+"\n"
        return str;
    }

    getTextOp(end)
    {
        switch(end)
        {
            case 200:
                return 'Operacional';
            case 401:
                return 'Operacional'; //Operacional 200                
            case 403:
                return 'Operacional'; //Operacional 200                
            case 404:
                return 'Operacional'; //Operacional 200       
            case 111:
                return 'No Operacional'; //Operacional 200
            default:
                return 'No Operacional';
        }
        
    }

    getStatColor(code)
    {
        switch(code)
        {
            case 200:
                return '#0da50db3';
            case 401:
                return '#0da50db3'; //Operacional 200                
            case 403:
                return '#0da50db3'; //Operacional 200                
            case 404:
                return '#0da50db3'; //Operacional 200
            case 111:
                return '#464946b3';
            default: 
                return '#e7b118b3';
        }
    }
    async sendPing()
    {
        //let _cat = this.endpoints.endpoints.find(e => e.id == cat)
        //let _list = _cat.list[id-1]//_cat.list.slice(id-1,id)
        //let url = new URL(this.endpoints.api+_list.endpoint)
        //Object.keys(_list.query).forEach(key => url.searchParams.append(key, _list.query[key]))
        this.getPings().then(data => {
            data.forEach(response => {
                if (!response.ok) {
                  const message = `An error has occured: ${response.status}`;
                  console.log(message)
                 // return response.status
                }
                let safe_url = response.url.substring(0, response.url.indexOf('?'));
                safe_url = safe_url.replace(this.endpoints.api,"")
                //console.log(safe_url)
                let date = new Date()
                let _data = {
                    "endpoint": safe_url,
                    "check": this.formatDate(date, 'mm/dd/yy h:m'), 
                    "response":response.status
                }
                this.stats.pings.push(_data)
            })
            console.log(this.stats.pings)
            //localStorage.removeItem('pings');
            localStorage.setItem("pings", JSON.stringify(this.stats.pings));
        })
    }

    /*signInForm: FormGroup;*/
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
       // private _formBuilder: FormBuilder,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    storedPings = []
    ngOnInit(): void {
        // Create the form
        setTimeout(() => {
            this.storedPings = JSON.parse(localStorage.getItem("pings"));
            if(this.storedPings == null)
            {     
                localStorage.setItem("pings", JSON.stringify(this.stats.pings));
            }
            else{
                this.stats.pings = this.storedPings
            }
        }, 500);
        setInterval(() => {
            this.sendPing(); 
            }, 60000);
    }
}