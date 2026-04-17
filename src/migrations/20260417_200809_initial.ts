import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text,
  	\`username\` text,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_username_idx\` ON \`users\` (\`username\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`category\` text DEFAULT 'other',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`services\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`services_updated_at_idx\` ON \`services\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`services_created_at_idx\` ON \`services\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`reviews\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`text\` text NOT NULL,
  	\`source\` text NOT NULL,
  	\`rating\` numeric DEFAULT 5,
  	\`date\` text,
  	\`published\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`reviews_updated_at_idx\` ON \`reviews\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`reviews_created_at_idx\` ON \`reviews\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`certificates\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`certificates_image_idx\` ON \`certificates\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`certificates_updated_at_idx\` ON \`certificates\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`certificates_created_at_idx\` ON \`certificates\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`faq\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`page\` text DEFAULT 'main' NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`faq_updated_at_idx\` ON \`faq\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`faq_created_at_idx\` ON \`faq\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`steps\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`number\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`steps_updated_at_idx\` ON \`steps\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`steps_created_at_idx\` ON \`steps\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`pricing_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pricing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pricing_features_order_idx\` ON \`pricing_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pricing_features_parent_id_idx\` ON \`pricing_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pricing\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`price\` text NOT NULL,
  	\`description\` text,
  	\`popular\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`pricing_updated_at_idx\` ON \`pricing\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pricing_created_at_idx\` ON \`pricing\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`services_id\` integer,
  	\`reviews_id\` integer,
  	\`certificates_id\` integer,
  	\`faq_id\` integer,
  	\`steps_id\` integer,
  	\`pricing_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`reviews_id\`) REFERENCES \`reviews\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`certificates_id\`) REFERENCES \`certificates\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faq_id\`) REFERENCES \`faq\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`steps_id\`) REFERENCES \`steps\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pricing_id\`) REFERENCES \`pricing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_services_id_idx\` ON \`payload_locked_documents_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_reviews_id_idx\` ON \`payload_locked_documents_rels\` (\`reviews_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_certificates_id_idx\` ON \`payload_locked_documents_rels\` (\`certificates_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_faq_id_idx\` ON \`payload_locked_documents_rels\` (\`faq_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_steps_id_idx\` ON \`payload_locked_documents_rels\` (\`steps_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pricing_id_idx\` ON \`payload_locked_documents_rels\` (\`pricing_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_stats_order_idx\` ON \`site_settings_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_stats_parent_id_idx\` ON \`site_settings_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_cta_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_cta_points_order_idx\` ON \`site_settings_cta_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_cta_points_parent_id_idx\` ON \`site_settings_cta_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_male_page_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_pain_points_order_idx\` ON \`site_settings_male_page_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_pain_points_parent_id_idx\` ON \`site_settings_male_page_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_male_page_what_i_do\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_what_i_do_order_idx\` ON \`site_settings_male_page_what_i_do\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_what_i_do_parent_id_idx\` ON \`site_settings_male_page_what_i_do\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_female_page_pain_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_pain_points_order_idx\` ON \`site_settings_female_page_pain_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_pain_points_parent_id_idx\` ON \`site_settings_female_page_pain_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_female_page_what_i_do\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_what_i_do_order_idx\` ON \`site_settings_female_page_what_i_do\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_what_i_do_parent_id_idx\` ON \`site_settings_female_page_what_i_do\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`contacts_phone1\` text DEFAULT '8 (920) 413-00-96',
  	\`contacts_phone2\` text DEFAULT '8 (950) 777-06-08',
  	\`contacts_email\` text DEFAULT 'denis.andreeschev2015@yandex.ru',
  	\`contacts_address\` text DEFAULT 'г. Воронеж, Московский проспект, д. 90',
  	\`contacts_telegram\` text DEFAULT 'https://t.me/',
  	\`contacts_max_link\` text DEFAULT 'https://max.ru/',
  	\`contacts_map_embed\` text DEFAULT 'https://yandex.ru/map-widget/v1/?um=constructor%3A1&source=constructor&ll=39.2199%2C51.6615&z=16&pt=39.2199%2C51.6615%2Cpm2rdm',
  	\`hero_name1\` text DEFAULT 'Денис',
  	\`hero_name2\` text DEFAULT 'Андреещев',
  	\`hero_side_text1\` text DEFAULT 'Защита того,',
  	\`hero_side_text2\` text DEFAULT 'что дороже',
  	\`hero_side_text3\` text DEFAULT 'всего!',
  	\`hero_cta_button\` text DEFAULT 'Бесплатная консультация',
  	\`hero_hero_image_id\` integer,
  	\`about_subtitle\` text DEFAULT 'Адвокат по семейным спорам',
  	\`about_title\` text DEFAULT 'Андреещев Денис',
  	\`about_title_accent\` text DEFAULT 'Валерьевич',
  	\`about_text1\` text,
  	\`about_text2\` text,
  	\`about_text3\` text,
  	\`about_reg_number\` text DEFAULT 'Адвокат, рег. номер 36/2348 в реестре адвокатов Воронежской области',
  	\`about_photo_id\` integer,
  	\`cta_old_price\` text DEFAULT '3 000 ₽',
  	\`cta_new_price\` text DEFAULT 'Бесплатно',
  	\`cta_price_note\` text DEFAULT '/ первичная консультация — 15 минут',
  	\`cta_title\` text DEFAULT '15 минут, которые могут сэкономить вам миллионы',
  	\`cta_cta_photo_id\` integer,
  	\`male_page_hero_title\` text DEFAULT 'Защищаю права мужчин при разводе',
  	\`male_page_hero_subtitle\` text DEFAULT 'Сохраню ваше имущество, бизнес и право на общение с детьми. Без эмоций — только закон и стратегия.',
  	\`male_page_hero_image_id\` integer,
  	\`male_page_quote_title\` text DEFAULT 'Вы не одиноки в этом',
  	\`male_page_quote_text1\` text,
  	\`male_page_quote_text2\` text,
  	\`male_page_quote_photo_id\` integer,
  	\`male_page_cta_title\` text DEFAULT 'Каждый день промедления — в пользу другой стороны',
  	\`female_page_hero_title\` text DEFAULT 'Защищаю права женщин при разводе',
  	\`female_page_hero_subtitle\` text DEFAULT 'Добьюсь справедливых алиментов, защищу ваше имущество и обеспечу стабильность для вас и детей.',
  	\`female_page_hero_image_id\` integer,
  	\`female_page_quote_title\` text DEFAULT 'Я понимаю, через что Вы проходите',
  	\`female_page_quote_text1\` text,
  	\`female_page_quote_text2\` text,
  	\`female_page_quote_photo_id\` integer,
  	\`female_page_cta_title\` text DEFAULT 'Не ждите, пока он спрячет имущество',
  	\`seo_main_title\` text DEFAULT 'Адвокат Андреещев — семейные дела в Воронеже',
  	\`seo_main_description\` text DEFAULT 'Адвокат по семейным делам в Воронеже. Развод, раздел имущества, алименты, споры о детях.',
  	\`seo_male_title\` text,
  	\`seo_male_description\` text,
  	\`seo_female_title\` text,
  	\`seo_female_description\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`hero_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`about_photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cta_cta_photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`male_page_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`male_page_quote_photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`female_page_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`female_page_quote_photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_hero_hero_hero_image_idx\` ON \`site_settings\` (\`hero_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_about_about_photo_idx\` ON \`site_settings\` (\`about_photo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_cta_cta_cta_photo_idx\` ON \`site_settings\` (\`cta_cta_photo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_male_page_hero_image_idx\` ON \`site_settings\` (\`male_page_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_male_page_male_page_quote_photo_idx\` ON \`site_settings\` (\`male_page_quote_photo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_female_page_hero_image_idx\` ON \`site_settings\` (\`female_page_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_female_page_female_page_quote_photo_idx\` ON \`site_settings\` (\`female_page_quote_photo_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`services\`;`)
  await db.run(sql`DROP TABLE \`reviews\`;`)
  await db.run(sql`DROP TABLE \`certificates\`;`)
  await db.run(sql`DROP TABLE \`faq\`;`)
  await db.run(sql`DROP TABLE \`steps\`;`)
  await db.run(sql`DROP TABLE \`pricing_features\`;`)
  await db.run(sql`DROP TABLE \`pricing\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`site_settings_stats\`;`)
  await db.run(sql`DROP TABLE \`site_settings_cta_points\`;`)
  await db.run(sql`DROP TABLE \`site_settings_male_page_pain_points\`;`)
  await db.run(sql`DROP TABLE \`site_settings_male_page_what_i_do\`;`)
  await db.run(sql`DROP TABLE \`site_settings_female_page_pain_points\`;`)
  await db.run(sql`DROP TABLE \`site_settings_female_page_what_i_do\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
}
