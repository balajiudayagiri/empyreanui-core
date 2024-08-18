// src/services/handlers.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "./db2connect";
import Post from "../models/Post";

const handlers = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    try {
      await dbConnect();
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  async POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      await dbConnect();
      const post = await Post.create(req.body);
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  async PUT(req: NextApiRequest, res: NextApiResponse) {
    try {
      await dbConnect();
      const { id } = req.body;
      const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  async DELETE(req: NextApiRequest, res: NextApiResponse) {
    try {
      await dbConnect();
      const { id } = req.body;
      await Post.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};

export default handlers;
