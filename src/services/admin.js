const VITE_OBTENER_TODOS_USUARIOS = import.meta.env.VITE_OBTENER_TODOS_USUARIOS
const VITE_SUSCRIPCCION = import.meta.env.VITE_SUSCRIPCCION
const VITE_SUGGESTIONS = import.meta.env.VITE_SUGGESTIONS
const VITE_PUBLICACIONES_ADMIN = import.meta.env.VITE_PUBLICACIONES_ADMIN
const VITE_POST_ADMIN_PUBLI = import.meta.env.VITE_POST_ADMIN_PUBLI
const VITE_ADMIN_GET_CSV = import.meta.env.VITE_ADMIN_GET_CSV

const useGetAllUsers = (bearer) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + bearer);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    return fetch(VITE_OBTENER_TODOS_USUARIOS, requestOptions).then(res => res.json())
}

const useAceptUser = (token, idUser) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_SUSCRIPCCION + "activate/" + idUser, requestOptions)
        .then(response => response.json())

}
const useDenyUser = (token, idUser) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_SUSCRIPCCION + "disable/" + idUser, requestOptions)
        .then(response => response.json())

}

const useGetAllSuggestions = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_SUGGESTIONS, requestOptions)
        .then(response => response.json())

}

const useGetAllPubli = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_PUBLICACIONES_ADMIN, requestOptions)
        .then(response => response.json())
}

const usePostOnePubli = (token, titulo, descripccion, audiencia, tipo, publishOn, publishOut) => {
    console.log("🚀 ", publishOn)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw;

    publishOut ? raw = JSON.stringify({
        "title": titulo,
        "description": descripccion,
        "audience": audiencia,
        "type": tipo,
        "publishOn": publishOn,
        "publishOut": publishOut
    }) : raw = JSON.stringify({
        "title": titulo,
        "description": descripccion,
        "audience": audiencia,
        "type": tipo,
        "publishOn": publishOn,

    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(VITE_POST_ADMIN_PUBLI, requestOptions)
        .then(response => response.json())
}


const useGetCSVUser = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_ADMIN_GET_CSV + "?csvBy=user", requestOptions).then(res => res.blob())
}
const useGetCSVStudents = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_ADMIN_GET_CSV + "?csvBy=student", requestOptions).then(res => res.blob())
}


const useDeletePubliById = (token, idPubli) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_POST_ADMIN_PUBLI + idPubli, requestOptions)
        .then(response => response.json())
}


export {
    useGetAllUsers,
    useAceptUser,
    useDenyUser,
    useGetAllSuggestions,
    useGetAllPubli,
    usePostOnePubli,
    useGetCSVStudents,
    useGetCSVUser,
    useDeletePubliById
}
