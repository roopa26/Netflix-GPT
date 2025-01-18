import OpenAI from 'openai';
import { GPT_KEY } from './constants';

export const openai = new OpenAI({
  apiKey: GPT_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});