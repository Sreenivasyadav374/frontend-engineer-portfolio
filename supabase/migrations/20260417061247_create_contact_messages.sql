/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, default now)
  
  2. Security
    - Enable RLS
    - Allow anyone to insert (public contact form)
    - No read policy for public (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
