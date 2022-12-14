

export const createUserDbConsultingOk = {
  type: 'object',
  example: {
    data: [
      {
        id: "8c88c555-e718-4741-9941-f952341199e3",
        account_name: "Parrswei-45",
        firstName: "Pedrwero",
        lastName: "Parravichiwerweni",
        email: "adivwerweeeei@hotmail.com.ar",
        status: "ACTIVE",
        updatedAt: "2022-12-13T21:48:33.931Z",
        createdAt: "2022-12-13T21:48:33.931Z"
      },
      true
    ],
    message: "user.create.succes",
    errors: []
  }
}

export const getUserByIdFromConsultingOk = {
  type: 'object',
  example: {
    id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    account_name: "MAY_min-45",
    firstName: "firstName",
    lastName: "lastName",
    email: "testing@test.com.ar",
    status: "active",
    createdAt: "2022-12-13T23:26:49.000Z",
    updatedAt: "2022-12-13T23:26:49.000Z",
    userId: null
  }
}

export const getUsersDataFromConsultinOk = {
  type: 'array',
  example: [
    {
      id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      account_name: "MAY_min-45",
      firstName: "firstName",
      lastName: "lastName",
      email: "testing@test.com.ar",
      status: "ACTIVE",
      updatedAt: "2022-12-13T00:11:03.668Z",
      createdAt: "2022-12-13T00:11:03.668Z"
    },
    true // true= the user was created | false= it already exists
  ]
}

/* ---------------------------ERRORS------------------------------*/

export const createUserDbConsulting400 = {
  error: {
    name: "SequelizeValidationError",
    errors: [
      {
        message: "must be a valid argument",
        type: "Validation error",
        path: "email",
        value: "value_To_Change",
        origin: "FUNCTION",
        instance: {
          id: null,
          account_name: "MAY_min-45",
          firstName: "firstName",
          lastName: "lastName",
          email: "testing@test.com.ar",
          status: "ACTIVE",
          updatedAt: "2022-12-13T23:36:09.391Z",
          createdAt: "2022-12-13T23:36:09.391Z"
        },
        validatorKey: "isEmail",
        validatorName: "isEmail",
        validatorArgs: [
          {
            msg: "must be valid Email",
            allow_display_name: false,
            require_display_name: false,
            allow_utf8_local_part: true,
            require_tld: true,
            blacklisted_chars: "",
            ignore_max_length: false,
            host_blacklist: []
          }
        ],
        original: {
          validatorName: "isEmail",
          validatorArgs: [
            {
              msg: "must be valid Email",
              allow_display_name: false,
              require_display_name: false,
              allow_utf8_local_part: true,
              require_tld: true,
              blacklisted_chars: "",
              ignore_max_length: false,
              host_blacklist: []
            }
          ]
        }
      }
    ]
  }
}

export const getUserByIdFromConsulting400 = {}

export const getUsersDataFromConsultin400 = {
  type: "object",
  example: {
    data: null,
    message: "Users search error",
    errors: [{}]
  }
}
