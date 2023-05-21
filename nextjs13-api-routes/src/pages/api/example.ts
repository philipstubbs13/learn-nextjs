import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    runtime: 'experimental-edge',
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;
    console.log(req.cookies.cookie)
    
    res.status(200).json({})
}

export default handler;