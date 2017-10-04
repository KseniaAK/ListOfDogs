import staticAssets from './static-assets';

export default function render(req, res) {
  const html = buildPage();
  res.status(200).send(html);
}

const buildPage = () => {
  return `
    <!doctype html>
    <html>
      <head>
        ${staticAssets.createStylesheets()}
      </head>
      <body>
        <div id="app"></div>
        ${staticAssets.createAppScript()}
      </body>
    </html>`;
};
