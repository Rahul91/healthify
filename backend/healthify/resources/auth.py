from flask_jwt import jwt_required, current_identity
from flask_restful import marshal_with, reqparse, fields, abort
from sqlalchemy.exc import SQLAlchemyError
from flask_restful import Resource

from healthify.models.configure import session
from healthify.utils import logger
from healthify.functionality.auth import signup, get_user_by_id
from healthify.utils.validation import non_empty_str

__author__ = 'rahul'

log = logger.logger


class Singup(Resource):

    signup_response_format = dict(
        user_id=fields.String,
        username=fields.String,
        created=fields.Boolean,
    )

    @marshal_with(signup_response_format)
    def post(self):
        signup_request_format = reqparse.RequestParser()
        signup_request_format.add_argument('username', type=non_empty_str, required=True, help="SIGNUP-REQ-USERNAME")
        signup_request_format.add_argument('password', type=non_empty_str, required=True, help="SIGNUP-REQ-PASSWORD")
        signup_request_format.add_argument('first_name', type=non_empty_str, required=True, help="SIGNUP-REQ-FIRSTNAME")
        signup_request_format.add_argument('last_name', type=non_empty_str, required=True, help="SIGNUP-REQ-LASTNAME")

        params = signup_request_format.parse_args()
        log.info(params)
        try:
            response = signup(**params)
            session.commit()
            return response
        except ValueError as val_err:
            log.error(repr(val_err))
            session.rollback()
            abort(400, message=val_err.message)
        except KeyError as key_err:
            log.error(repr(key_err))
            session.rollback()
            abort(400, message="SIGNUP-INVALID-PARAM")
        except IOError as io_err:
            log.exception(io_err)
            session.rollback()
            abort(500, message="API-ERR-IO")
        # except SQLAlchemyError as sa_err:
        #     log.exception(sa_err)
        #     session.rollback()
        #     abort(500, message="API-ERR-DB")
        except Exception as e:
            print e
            session.rollback()


class User(Resource):
    decorators = [jwt_required()]

    user_response_format = dict(
        username=fields.String,
        first_name=fields.String,
        last_name=fields.String,
        created_on=fields.DateTime,
    )

    @marshal_with(user_response_format)
    def get(self):
        try:
            response = get_user_by_id(user_id=current_identity.id)
            session.commit()
            return response
        except ValueError as val_err:
            log.error(repr(val_err))
            session.rollback()
            abort(400, message=val_err.message)
        except KeyError as key_err:
            log.error(repr(key_err))
            session.rollback()
            abort(400, message="USR-INVALID-PARAM")
        except IOError as io_err:
            log.exception(io_err)
            session.rollback()
            abort(500, message="API-ERR-IO")
        # except SQLAlchemyError as sa_err:
        #     log.exception(sa_err)
        #     session.rollback()
        #     abort(500, message="API-ERR-DB")
        except Exception as e:
            print e
            session.rollback()



class ForgotPassword(Resource):
    pass
