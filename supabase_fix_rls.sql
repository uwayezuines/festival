-- =================================================================
-- FIX RAPIDE : Exécutez ce script dans Supabase SQL Editor
-- Supabase → Dashboard → SQL Editor → New Query → Coller → Run
-- =================================================================

-- 1. Autoriser les soumissions de projets (INSERT sur artistes_realisateurs)
DROP POLICY IF EXISTS "Insert publique artistes" ON public.artistes_realisateurs;
CREATE POLICY "Insert publique artistes" ON public.artistes_realisateurs FOR INSERT WITH CHECK (true);

-- 2. Autoriser la mise à jour des places (UPDATE sur evenements)
DROP POLICY IF EXISTS "Mise a jour places événements" ON public.evenements;
CREATE POLICY "Mise a jour places evenements" ON public.evenements FOR UPDATE USING (true);

-- 3. Autoriser les admins à modifier les candidatures (statut, type)
DROP POLICY IF EXISTS "Admin Update Artistes" ON public.artistes_realisateurs;
CREATE POLICY "Admin Update Artistes" ON public.artistes_realisateurs FOR UPDATE USING (public.is_admin());

-- 4. Autoriser les admins à supprimer des candidates Miss
DROP POLICY IF EXISTS "Admin Delete Artistes" ON public.artistes_realisateurs;
CREATE POLICY "Admin Delete Artistes" ON public.artistes_realisateurs FOR DELETE USING (public.is_admin());

-- 5. Bucket Storage pour photos Miss (si pas encore fait)
INSERT INTO storage.buckets (id, name, public)
VALUES ('candidatures', 'candidatures', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public Read Candidatures" ON storage.objects;
CREATE POLICY "Public Read Candidatures" ON storage.objects FOR SELECT USING (bucket_id = 'candidatures');

DROP POLICY IF EXISTS "Public Upload Candidatures" ON storage.objects;
CREATE POLICY "Public Upload Candidatures" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'candidatures');
