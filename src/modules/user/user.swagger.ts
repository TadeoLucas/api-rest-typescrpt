

export const createUserDbConsultingOk = {
  type: 'object',
  example: {
    data: {
      id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      account_name: "account_name",
      firstName: "firstName",
      lastName: "lastName",
      status: "active",
      updatedAt: "2022-12-13T21:48:33.931Z",
      createdAt: "2022-12-13T21:48:33.931Z",
      userId: null || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    },
    message: "user.create.succes" || "USER.ALREADY.EXIST",
    errors: []
  }
}

export const loginUserDbConsultingOk = {
  type: 'object',
  example: {
    data: "xxxxbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwMjg2OGEzLTk4YTYtNGRlYS05ZThjLTNjYjkxOGFhMGIwYSIsImlhdCI6MTY3MjA3MDQ0NCwiZXhwIjoxNjcyMDc3NjQ0fQ.4mfav96es3pz_7BdeHXwquIi9GjfAahfCChUs_06MRQ",
    message: "OK",
    error: []
  }
}

export const getUserByIdFromConsultingOk = {
  type: 'object',
  example: {
    data: {
      id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      account_name: "MAY_min-45",
      firstName: "firstName",
      lastName: "lastName",
      password: "passwordHash",
      email: "testing@test.com.ar",
      status: "active",
      createdAt: "2022-12-13T23:26:49.000Z",
      updatedAt: "2022-12-13T23:26:49.000Z",
      userId: null || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    },
    message: "userbyid.get.succes",
    error: []
  }
}

export const getUsersDataFromConsultinOk = {
  type: 'object',
  example: {
    data: [
      {
        id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        account_name: "Cont_-25",
        firstName: "firstName",
        lastName: "lastName",
        password: "passwordHash",
        email: "email@email.com.xx",
        status: "inactive",
        createdAt: "2022-12-26T16:20:44.000Z",
        updatedAt: "2022-12-26T16:20:44.000Z",
        userId: null || "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }, {}, {}, '...'
    ],
    message: "users.get.succes",
    error: []
  }
}

export const putUserByIdFromConsultingOk = {
  type: 'object',
  example: {
    data: [
      'number of fields updated'
    ],
    message: "user.updated.succes",
    error: []
  }
}

export const putUserByAccountNameFromConsultingOk = {
  type: 'object',
  example: {
    data: [
      'number of fields updated'
    ],
    message: "user.updated.succes",
    error: []
  }
}

export const roleOfUserByAccountNameFromConsultingOk = {
  type: 'object',
  example: {
    data: [
      'number of fields updated'
    ],
    message: "role.user.updated.succes",
    error: []
  }
}

export const deleteUserByIdFromConsultingOk = {
  type: 'object',
  example: {
    data: 1,
    message: "user.deleted.succes",
    error: []
  }
}


/* ---------------------------ERRORS------------------------------*/

export const createUserDbConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: 'USER.CREATE.ERROR',
    error: {
      name: "SequelizeValidationError",
      errors: [
        {
          message: "must be a valid Argument",
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
              msg: "must be valid Argument",
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
                msg: "must be valid Argument",
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
}

export const loginUserDbConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: "USER_NOT_FOUND",
    error: null || ['error stack']
  }
}

export const getUserByIdFromConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: 'ERROR_GET_USER_BYID',
    error: null || 'error stack'
  }
}

export const getUsersDataFromConsultin400 = {
  type: "object",
  example: {
    data: null,
    message: 'ERROR_GET_USERS',
    error: null || 'error stack'
  }
}

export const putUserByIdFromConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: "ERROR_PUT_USER",
    error: [
      {}
    ]
  }
}

export const putUserByAccountNameFromConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: "ERROR_PUT_USER",
    error: ['error stack object']
  }
}

export const roleOfUserByAccountNameFromConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: "ERROR_PUT_ROLE_USER",
    error: ['error stack object']
  }
}

export const deleteUserByIdFromConsulting400 = {
  type: 'object',
  example: {
    data: null,
    message: "ERROR_DELETE_USER" || 'the user with the indicated Id does not exist',
    error: ['error stack object']
  }
}