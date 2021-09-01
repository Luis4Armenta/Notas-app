import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
  cloud_name: 'laarm', 
  api_key: '666976393328648', 
  api_secret: 'o7oSPQgWySTPtCIINtrovgJVcWs',
  secure: true
});

describe('Pruebas en fileUpload', () => {
  test('debe de cargar un archivo y retornar el URL', async () => {
    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();

    const file = new File([blob], 'foto1.png');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace('.png', '')

    await cloudinary.v2.api.delete_resources(imageId, (err, result) => {
    });
  });

  test('debe de retornar un error', async () => {
    const file = new File([], 'foto1.png');
    const url = await fileUpload(file);

    expect(url).toBeNull();
  });
});