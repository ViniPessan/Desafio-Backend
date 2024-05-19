import { Request, Response } from 'express';
import Enterprise from '../models/enterprise';

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const createEnterprise = async (req: Request, res: Response) => {
  try {
    const enterprise = await Enterprise.create(req.body);
    res.status(201).json(enterprise);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getEnterprises = async (req: Request, res: Response) => {
  try {
    const enterprises = await Enterprise.findAll();
    res.status(200).json(enterprises);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getEnterpriseById = async (req: Request, res: Response) => {
  try {
    const enterprise = await Enterprise.findByPk(req.params.id);
    if (enterprise) {
      res.status(200).json(enterprise);
    } else {
      res.status(404).json({ error: 'Enterprise not found' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateEnterprise = async (req: Request, res: Response) => {
  try {
    const [updated] = await Enterprise.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedEnterprise = await Enterprise.findByPk(req.params.id);
      res.status(200).json(updatedEnterprise);
    } else {
      res.status(404).json({ error: 'Enterprise not found' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteEnterprise = async (req: Request, res: Response) => {
  try {
    const deleted = await Enterprise.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Enterprise not found' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
