const COMMON_PUBLI_ENDPOINT = import.meta.env.VITE_PUBLICACIONES_COMUNES

const usePublicaciones = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(COMMON_PUBLI_ENDPOINT, requestOptions)
        .then(response => response.json())

}

const useExData = () => {
    return [
        {
            "id": "O2hRTj7H4TCvfOaNstue",
            "idUser": "JUCRs2CHzj6ZwczDtQuI",
            "title": "Titulo de ads1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "audience": "PRIVATE",
            "type": "EXTRAESCOLARES",
            "img": [
                "https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ],
            "files": [],
            "publishOn": {
                "_seconds": 1696689680,
                "_nanoseconds": 0
            },
            "publishOut": {
                "_seconds": 1701960080,
                "_nanoseconds": 0
            },
            "createdAt": {
                "_seconds": 1684011286,
                "_nanoseconds": 914000000
            },
            "updatedAt": {
                "_seconds": 1684011286,
                "_nanoseconds": 914000000
            },
            "status": true
        },
        {
            "id": "nI1R4kez9ofZifnXZD6C",
            "idUser": "JUCRs2CHzj6ZwczDtQuI",
            "title": "Titulo de ads",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "audience": "PUBLIC",
            "type": "EXTRAESCOLARES",
            "img": [
                "https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ],
            "files": [],
            "publishOn": {
                "_seconds": 1696689680,
                "_nanoseconds": 0
            },
            "publishOut": {
                "_seconds": 1701960080,
                "_nanoseconds": 0
            },
            "createdAt": {
                "_seconds": 1684011270,
                "_nanoseconds": 785000000
            },
            "updatedAt": {
                "_seconds": 1684011270,
                "_nanoseconds": 785000000
            },
            "status": true
        },
        {
            "id": "wLReMEPnKo6xUnv1gZjR",
            "idUser": "JUCRs2CHzj6ZwczDtQuI",
            "title": "Titulo de ads",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "audience": "PRIVATE",
            "type": "ESCOLARES",
            "img": [
                "https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ],
            "files": [],
            "publishOn": {
                "_seconds": 1696689680,
                "_nanoseconds": 0
            },
            "publishOut": {
                "_seconds": 1701960080,
                "_nanoseconds": 0
            },
            "createdAt": {
                "_seconds": 1683923442,
                "_nanoseconds": 392000000
            },
            "updatedAt": {
                "_seconds": 1683923442,
                "_nanoseconds": 392000000
            },
            "status": true
        }
    ]
}

export { usePublicaciones, useExData }