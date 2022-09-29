export interface SearchResults {
cite ?: any,
additional_links?:any
description :string;
link :string;
title :string;
}

export interface ImageResults {
   image  : image,
   link  : link;
}

interface image {
  src ? :string;
  alt ? :string,
}

interface link {
  domain ? :string,
  href ? :string,
  title ? :string;
}
