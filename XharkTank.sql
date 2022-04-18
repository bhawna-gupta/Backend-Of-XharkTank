--
-- PostgreSQL database dump
--

-- Dumped from database version 12.10
-- Dumped by pg_dump version 12.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: offers; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.offers (
    id integer NOT NULL,
    investor text NOT NULL,
    amount double precision NOT NULL,
    equity double precision NOT NULL,
    comment text NOT NULL
);


ALTER TABLE public.offers OWNER TO admin;

--
-- Name: pitches; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.pitches (
    id integer NOT NULL,
    entrepreneur text NOT NULL,
    "pitchTitle" text NOT NULL,
    "pitchIdea" text NOT NULL,
    "askAmount" double precision NOT NULL,
    equity double precision NOT NULL
);


ALTER TABLE public.pitches OWNER TO admin;

--
-- Name: pitches_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.pitches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pitches_id_seq OWNER TO admin;

--
-- Name: pitches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.pitches_id_seq OWNED BY public.pitches.id;


--
-- Name: pitches id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.pitches ALTER COLUMN id SET DEFAULT nextval('public.pitches_id_seq'::regclass);


--
-- Data for Name: offers; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.offers (id, investor, amount, equity, comment) FROM stdin;
\.


--
-- Data for Name: pitches; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.pitches (id, entrepreneur, "pitchTitle", "pitchIdea", "askAmount", equity) FROM stdin;
\.


--
-- Name: pitches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.pitches_id_seq', 60, true);


--
-- Name: pitches pitches_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.pitches
    ADD CONSTRAINT pitches_pkey PRIMARY KEY (id);


--
-- Name: offers offers_pitch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.offers
    ADD CONSTRAINT offers_pitch_id_fkey FOREIGN KEY (id) REFERENCES public.pitches(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

