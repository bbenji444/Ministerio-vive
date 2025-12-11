-- Add images array column to store multiple images
ALTER TABLE public.news ADD COLUMN images TEXT[] DEFAULT '{}';

-- Migrate existing image_url data to images array
UPDATE public.news SET images = ARRAY[image_url] WHERE image_url IS NOT NULL AND image_url != '';