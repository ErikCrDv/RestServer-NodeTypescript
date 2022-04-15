import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async ( req: Request, res: Response ) => {
    const users = await User.findAll();
    return res.json( users );
};

export const getUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    
    try {
        const user = await User.findByPk( id );
        if( !user ){
            return res.status( 400 ).json( { msg: 'User No Exists' } );
        }

        return res.json( user );
  
    } catch (error) {
        console.log( error );
        return res.status( 500 ).json( { msg: 'Internal Error' } );
    }

};

export const postUser = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const emailExist = await User.findOne( { where: { email: body.email } });
        if( emailExist ){
            return res.status( 400 ).json( { msg: 'User Exists' } );
        }

        const user = await User.create( body );
        return res.json( user );
  
    } catch (error) {
        console.log( error );
        return res.status( 500 ).json( { msg: 'Internal Error' } );
    }

};

export const putUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk( id );
        if( !user ){
            return res.status( 400 ).json( { msg: 'User No Exists' } );
        }

        const emailExist = await User.findOne( { where: { email: body.email } });
        if( emailExist ){
            return res.status( 400 ).json( { msg: 'Email Exists' } );
        }

        await user.update( body );
        return res.json( user );

    } catch (error) {
        console.log( error );
        return res.status( 500 ).json( { msg: 'Internal Error' } );
    }

};

export const deleteUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;

    const user = await User.findByPk( id );
    if( !user ){
        return res.status( 400 ).json( { msg: 'User No Exists' } );
    }

    // await user.destroy();
    await user.update( { status: false } );
    return res.json( user );
};

