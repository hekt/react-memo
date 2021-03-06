export type ArticleData = {
  title: string;
  lines: string[];
};

export function parseArticles(text: string): ArticleData[] {
  const articles: ArticleData[] = [];
  let title = "";
  let texts: string[] = [];
  text.split("\n").forEach((l: string) => {
    if (l.indexOf("# ") !== 0) {
      texts.push(l);
      return;
    }

    if (title !== "") {
      articles.push({
        title,
        lines: texts,
      });
    }

    title = l.slice(2);
    texts = [];
  });

  if (title !== "") {
    articles.push({
      title,
      lines: texts,
    });
  }

  return articles;
}
