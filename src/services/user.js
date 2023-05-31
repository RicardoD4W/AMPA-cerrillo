const VITE_PATCH_DATOS_USUARIO_POR_ID = import.meta.env.VITE_PATCH_DATOS_USUARIO_POR_ID
const VITE_BUSCAR_HIJOS_POR_ID = import.meta.env.VITE_BUSCAR_HIJOS_POR_ID
const VITE_CAMBIAR_DATOS_HIJOS_POR_ID = import.meta.env.VITE_CAMBIAR_DATOS_HIJOS_POR_ID
const VITE_ENVIAR_SUGERENCIA_DE_USUARIO = import.meta.env.VITE_ENVIAR_SUGERENCIA_DE_USUARIO

const useChangeDataUser = (bearer, name, dni, phone, email, id, photo, fileInput) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + bearer);

    var formdata = new FormData();

    if (photo && fileInput) formdata.append("img", fileInput.files[0], photo);
    formdata.append("name", name);
    formdata.append("dni", dni);
    formdata.append("phone", phone);
    formdata.append("email", email);

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };


    return fetch(VITE_PATCH_DATOS_USUARIO_POR_ID + id, requestOptions)
        .then(response => response.json())

}

const useSearchChildsById = (id, bearer, limit = 10, offset = 0,) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + bearer);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${VITE_BUSCAR_HIJOS_POR_ID}${id}/?limit=${limit}&offset=${offset}`, requestOptions)
        .then(response => response.json())
}

const useChangeDataChild = (childId, bearer, childName, childCourse, childClassrom, childMode) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + bearer);

    var raw = JSON.stringify({
        "name": childName,
        "course": childCourse,
        "classroom": childClassrom,
        "mode": childMode
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(VITE_CAMBIAR_DATOS_HIJOS_POR_ID + childId, requestOptions)
        .then(response => response.json())

}

const usePostUserSuggestion = (bearer, title, description, idUser) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + bearer);

    var raw = JSON.stringify({
        "title": title,
        "description": description
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(VITE_ENVIAR_SUGERENCIA_DE_USUARIO + idUser, requestOptions)
        .then(response => response.json())

}

export { useChangeDataUser, useSearchChildsById, useChangeDataChild, usePostUserSuggestion }