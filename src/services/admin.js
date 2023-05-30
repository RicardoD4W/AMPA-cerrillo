const VITE_OBTENER_TODOS_USUARIOS = import.meta.env.VITE_OBTENER_TODOS_USUARIOS
const VITE_SUSCRIPCCION = import.meta.env.VITE_SUSCRIPCCION

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



export {
    useGetAllUsers,
    useAceptUser,
    useDenyUser
}
