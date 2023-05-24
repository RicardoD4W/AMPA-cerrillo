const COMMON_PUBLI_ENDPOINT = import.meta.env.VITE_PUBLICACIONES_COMUNES
const USUARIOS_PUBLI_ENDPOINT = import.meta.env.VITE_PUBLICACIONES_USUARIOS

const usePublicaciones = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(COMMON_PUBLI_ENDPOINT, requestOptions)
        .then(response => response.json())

}

const usePublicacionesUser = (bearer, offset = 0, limit = 8,) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + bearer);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(USUARIOS_PUBLI_ENDPOINT + `&limit=${limit}&offset=${offset}&orderBy=asc&&status=true`, requestOptions)
        .then(response => response.json())

}

export { usePublicaciones, usePublicacionesUser }