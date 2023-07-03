// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Record {

    // Estructura para el usuario signatureHash => Firma hash, userAddress => direccion del usuario
    struct Username {
        string signatureHash;
        address userAddress;
    }

    struct Users {
        string name;
        // Numero celular
        string celphone;
        // Numero fijo
        string phone;
        // Correo
        string email;
        // Genero
        string gender;
        // Fecha de nacimiento
        string dob;
        // Direccion
        string houseaddr;
        // Estado
        string state;
        // CP
        string cp;
        // Direccion-contr
        address addr;
        // Tiempo de carga
        uint uploadTime;
    }

    address public owner;
    address[] public userList;

    // mapping(address => user) public users
    mapping(address => Users) public users;
    mapping(address => bool) isUser;
    // Mapping para relacionar la direccion con el usuario con la estructura que contiene la direcion y la firma de hash
    mapping(address => Username) private user1;

    uint256 public userCount = 0;
    // Numero de usuarios
    uint256 public nbOfUsers;

    constructor() {
        owner = msg.sender;
        nbOfUsers = 0;
    }
    // =======================
    // =  L   O   G   I   N  =
    // =======================

    // Funcion de registro de usuario, en donde el msgsender es el usuario y verifica si la direccion (wallet) ya se encuentra dado de alta.
    // Se registra un has nuevo.
    function register(string memory _signature) public {
        require(
            user1[msg.sender].userAddress ==
                address(0x0000000000000000000000000000000000000000),
            "Ya registrado"
        );

        // El usuario combinado con la forma hash se guarda en la variable _signature
        user1[msg.sender].signatureHash = _signature;
        // El usuario combinado con la direccion del
        user1[msg.sender].userAddress = msg.sender;
        nbOfUsers++;
    }

    // Funcion para obtener la FirmaHash (el hash registrado).
    function getSignatureHash() public view returns (string memory) {
        // Para poder hacerlo se requiere que exista el usuario (msg.sender sea igual al usuario del que se obtiene la direccion de ethereum.
        require(msg.sender == user1[msg.sender].userAddress, "No permitido");
        // Se retorna la la firma asociada al msg.sender
        return user1[msg.sender].signatureHash;
    }

    // Funcion para obtener la direccion del usuario.
    function getUserAddress() public view returns (address) {
        // msg.sender sea igual a la direccion del usuario.
        return user1[msg.sender].userAddress;
    }
    // =============================
    // =  R E C O R D - B L O C K  =
    // =============================

    // Recupera los datos del usuario (de la página de registro del usuario) y almacena la cadena de bloques.
    // Retrieve user details from user sign up page and store the details into the blockchain.
    function setDetails(
        string memory _name,
        string memory _celphone,
        string memory _phone,
        string memory _email,
        string memory _gender,
        string memory _dob,
        string memory _houseaddr,
        string memory _state,
        string memory _cp
    ) public {
        require(!isUser[msg.sender]);
        users[msg.sender] = Users(
            _name,
            _celphone,
            _phone,
            _email,
            _gender,
            _dob,
            _houseaddr,
            _state,
            _cp,
            msg.sender,
            block.timestamp
        );

        userList.push(msg.sender);
        isUser[msg.sender] = true;
        //isApproved[msg.sender][msg.sender] = true;
        userCount++;
    }

    // Permite al usuario editar su registro existente.
    // Allows user to edit their existing record.
    function editDetails(
        string memory _name,
        string memory _celphone,
        string memory _phone,
        string memory _email,
        string memory _gender,
        string memory _dob,
        string memory _houseaddr,
        string memory _state,
        string memory _cp
    ) public {
        require(isUser[msg.sender]);
        users[msg.sender] = Users(
            _name,
            _celphone,
            _phone,
            _email,
            _gender,
            _dob,
            _houseaddr,
            _state,
            _cp,
            msg.sender,
            block.timestamp
        );
    }

    // Recuperar una lista de todas las direcciones de los usuarios.
    // Retrieve a list of all users address.
    function getUser() public view returns (address[] memory) {
        return userList;
    }

    // Busca la fecha de creación del registro del usuario ingresando la dirección del usuario.
    // Search user record creation date by entering a user address.
   function RecordDate() public view returns (uint256) {
        // users[_address];
        return block.timestamp;
    } 

    // Recuperar conteo de usuarios.
    // Retrieve usuarios count.
    function getUserCount() public view returns (uint256) {
        return userCount;
    }

    // Busca los detalles de la informacion personal del usuario ingresando la dirección (Usuario), (solo se permitira el acceso al propietario del registro)
    // Search user personal information details by entering a user address (only the owner of the record will be allowed access).
    function searchUserPersonalInfo(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(isUser[msg.sender]);
        return (
            users[_address].name,
            users[_address].celphone,
            users[_address].phone,
            users[_address].gender,
            users[_address].dob,
            users[_address].email
        );
    }

    // Buscar detalles de información adicional del usuario ingresando una dirección de usuario (solo se permitirá el acceso al propietario del registro)
    // Search user aditional Information details by entering a user address (Only record owner  will be allowed to access)
    function searchUserAditionalInfo(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        require(isUser[msg.sender]);
        return (
            users[_address].houseaddr,
            users[_address].state,
            users[_address].cp
        );
    }

    // Busca los detalles de la informacion del usuario ingresando la dirección (Usuario), (solo se permitira el acceso al propietario del registro)
    // Search user personal information details by entering a user address (only the owner of the record will be allowed access).
    function UserPersonalInformation(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(isUser[msg.sender]);
        return (
            users[_address].name,
            users[_address].celphone,
            users[_address].phone,
            users[_address].gender,
            users[_address].dob,
            users[_address].email
        );
    }

    function UserPersonalInformation1(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        require(isUser[msg.sender]);
        return (
            users[_address].houseaddr,
            users[_address].state,
            users[_address].cp
        );
    }
}
