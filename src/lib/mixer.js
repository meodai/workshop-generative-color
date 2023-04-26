// fixed output range/step for all spectra
const WAVELENGTH_MIN = 380;
const WAVELENGTH_MAX = 780;
const WAVELENGTH_STEP = 5;
const WAVELENGTH_COUNT =
  (WAVELENGTH_MAX + WAVELENGTH_STEP - WAVELENGTH_MIN) / WAVELENGTH_STEP;

// prettier-ignore
const DATA = {
  CMF: [
    [0.001368, 0.000039, 0.00645],
    [0.002236, 0.000064, 0.01055],
    [0.004243, 0.00012, 0.02005],
    [0.00765, 0.000217, 0.03621],
    [0.01431, 0.000396, 0.06785],
    [0.02319, 0.00064, 0.1102],
    [0.04351, 0.00121, 0.2074],
    [0.07763, 0.00218, 0.3713],
    [0.13438, 0.004, 0.6456],
    [0.21477, 0.0073, 1.03905],
    [0.2839, 0.0116, 1.3856],
    [0.3285, 0.01684, 1.62296],
    [0.34828, 0.023, 1.74706],
    [0.34806, 0.0298, 1.7826],
    [0.3362, 0.038, 1.77211],
    [0.3187, 0.048, 1.7441],
    [0.2908, 0.06, 1.6692],
    [0.2511, 0.0739, 1.5281],
    [0.19536, 0.09098, 1.28764],
    [0.1421, 0.1126, 1.0419],
    [0.09564, 0.13902, 0.81295],
    [0.05795, 0.1693, 0.6162],
    [0.03201, 0.20802, 0.46518],
    [0.0147, 0.2586, 0.3533],
    [0.0049, 0.323, 0.272],
    [0.0024, 0.4073, 0.2123],
    [0.0093, 0.503, 0.1582],
    [0.0291, 0.6082, 0.1117],
    [0.06327, 0.71, 0.07825],
    [0.1096, 0.7932, 0.05725],
    [0.1655, 0.862, 0.04216],
    [0.22575, 0.91485, 0.02984],
    [0.2904, 0.954, 0.0203],
    [0.3597, 0.9803, 0.0134],
    [0.43345, 0.99495, 0.00875],
    [0.51205, 1, 0.00575],
    [0.5945, 0.995, 0.0039],
    [0.6784, 0.9786, 0.00275],
    [0.7621, 0.952, 0.0021],
    [0.8425, 0.9154, 0.0018],
    [0.9163, 0.87, 0.00165],
    [0.9786, 0.8163, 0.0014],
    [1.0263, 0.757, 0.0011],
    [1.0567, 0.6949, 0.001],
    [1.0622, 0.631, 0.0008],
    [1.0456, 0.5668, 0.0006],
    [1.0026, 0.503, 0.00034],
    [0.9384, 0.4412, 0.00024],
    [0.85445, 0.381, 0.00019],
    [0.7514, 0.321, 0.0001],
    [0.6424, 0.265, 0.00005],
    [0.5419, 0.217, 0.00003],
    [0.4479, 0.175, 0.00002],
    [0.3608, 0.1382, 0.00001],
    [0.2835, 0.107, 0],
    [0.2187, 0.0816, 0],
    [0.1649, 0.061, 0],
    [0.1212, 0.04458, 0],
    [0.0874, 0.032, 0],
    [0.0636, 0.0232, 0],
    [0.04677, 0.017, 0],
    [0.0329, 0.01192, 0],
    [0.0227, 0.00821, 0],
    [0.01584, 0.005723, 0],
    [0.011359, 0.004102, 0],
    [0.008111, 0.002929, 0],
    [0.00579, 0.002091, 0],
    [0.004109, 0.001484, 0],
    [0.002899, 0.001047, 0],
    [0.002049, 0.00074, 0],
    [0.00144, 0.00052, 0],
    [0.001, 0.000361, 0],
    [0.00069, 0.000249, 0],
    [0.000476, 0.000172, 0],
    [0.000332, 0.00012, 0],
    [0.000235, 0.000085, 0],
    [0.000166, 0.00006, 0],
    [0.000117, 0.000042, 0],
    [0.000083, 0.00003, 0],
    [0.000059, 0.000021, 0],
    [0.000042, 0.000015, 0]
  ],
  "basis": [
    [0.327457413827055, 0.331861713085874, 0.340680791548052],
    [0.323750578270541, 0.329688187759399, 0.346561186624852],
    [0.313439461251577, 0.327860021624697, 0.358700493140351],
    [0.288879382755265, 0.319173580231756, 0.391947026588195],
    [0.239205681158886, 0.294322583694842, 0.466471730587333],
    [0.189702036890535, 0.258697064768736, 0.551600895598602],
    [0.121746067959218, 0.188894319254765, 0.689359610948928],
    [0.074578270669466, 0.125388381991689, 0.800033346878607],
    [0.0444331586340337, 0.0786870603106217, 0.876879780935314],
    [0.0289286321285029, 0.0531432708659453, 0.917928097443955],
    [0.0223166534847512, 0.0422881460313421, 0.935395200669632],
    [0.0169113072926318, 0.0333183455029171, 0.949770347115183],
    [0.0141811071179667, 0.0297559481859724, 0.95606294480524],
    [0.0130531426774873, 0.0303312505369047, 0.956615606890316],
    [0.011986163627845, 0.0309885718973007, 0.957025264931328],
    [0.0112887147124048, 0.0316863551888381, 0.957024930534713],
    [0.0109060664656517, 0.0346699615029974, 0.954423972737066],
    [0.0104007134810042, 0.034551957443675, 0.955047329020204],
    [0.0106373602541465, 0.0406848061948297, 0.948677833093334],
    [0.0109076625337741, 0.0544600373694056, 0.934632299842328],
    [0.0110327124480988, 0.0809052874204737, 0.908061999852269],
    [0.0113106565912268, 0.146348302857044, 0.842341039463727],
    [0.0111546420569403, 0.379679643296617, 0.609165715365647],
    [0.0101487704062122, 0.766744268654033, 0.223106960959533],
    [0.00891858211883843, 0.87621474761337, 0.114866670291336],
    [0.00768557633847106, 0.918491655613843, 0.0738227678957437],
    [0.00670570828469526, 0.940655562534437, 0.0526387287910555],
    [0.00599580598764424, 0.95373188453302, 0.0402723090168887],
    [0.00553725664234189, 0.961643279840238, 0.0328194626509591],
    [0.00519378424120663, 0.967200019685078, 0.0276061959270456],
    [0.00502536226522334, 0.970989746390046, 0.0239848911270394],
    [0.00513636276967508, 0.972852303563554, 0.0220113333527922],
    [0.00543320026053983, 0.973116594076444, 0.0214502052559966],
    [0.00581998590243535, 0.973351069154143, 0.0208289445095685],
    [0.00640057277462412, 0.973351115544369, 0.0202483113888087],
    [0.00744952868340878, 0.972261079731725, 0.0202893914512066],
    [0.00858363581937657, 0.973351021746917, 0.018065342335913],
    [0.0103957624651674, 0.973148495185693, 0.0164557422344685],
    [0.0135654335386492, 0.971061306300914, 0.0153732601340955],
    [0.0193845158399742, 0.966371305955183, 0.0142441784845517],
    [0.0320840712020024, 0.954941967502548, 0.0129739615543347],
    [0.0743560378459411, 0.913578989551261, 0.0120649741345218],
    [0.624393724178075, 0.364348803907687, 0.0112574781603901],
    [0.91831003276872, 0.0715072425408851, 0.0101827246716942],
    [0.949253030175051, 0.0412304344713751, 0.00951653538723741],
    [0.958187833329246, 0.0324238741836685, 0.00938829272866817],
    [0.958187751332698, 0.0319246297982003, 0.00988761909067028],
    [0.958187625087782, 0.0312760331730969, 0.0105363420064589],
    [0.955679060771746, 0.0326303704290574, 0.0116905688374448],
    [0.958006154893429, 0.0295308721490739, 0.0124629728871037],
    [0.954101573456564, 0.0315617611702464, 0.0143366651774203],
    [0.947607606237237, 0.0356742182708204, 0.0167181753275443],
    [0.938681328447549, 0.0414030053955673, 0.0199156660750025],
    [0.924466682751434, 0.0506042604489561, 0.024929056163281],
    [0.904606025333056, 0.0634343003817003, 0.0319596735860402],
    [0.880412198927933, 0.0789182452939229, 0.0406695540952484],
    [0.8477878731517, 0.0995427426653747, 0.0526693824219396],
    [0.805779126623019, 0.125595760093287, 0.0686251105141947],
    [0.752531853871421, 0.15759091044168, 0.0898772323000136],
    [0.686439396844578, 0.19539823904421, 0.118162358926434],
    [0.61869457086061, 0.231474474772178, 0.149830947442133],
    [0.540264443959111, 0.268852136095262, 0.190883409341834],
    [0.472964416293838, 0.296029164217928, 0.231006403025217],
    [0.432701596704049, 0.309754994441945, 0.257543385422202],
    [0.405358045528392, 0.317815883383822, 0.276826038721536],
    [0.385491834974902, 0.322990347389898, 0.291517772810795],
    [0.370983584551061, 0.326353847938009, 0.302662506083233],
    [0.357608701523081, 0.32914390227898, 0.313247301302886],
    [0.348712800108393, 0.330808726803682, 0.320478325124633],
    [0.344880119344691, 0.331482689922243, 0.323636994707961],
    [0.341917877323291, 0.331984550352389, 0.3260973088469],
    [0.339531092987129, 0.332341172522545, 0.328127369340184],
    [0.337169503774367, 0.332912009415539, 0.329917975958888],
    [0.336172018527717, 0.332919279695214, 0.330907901216649],
    [0.335167443433363, 0.333027672578856, 0.331803633095995],
    [0.334421625306463, 0.33317970467326, 0.332396627255361],
    [0.334008760376402, 0.333247030974549, 0.332740780726824],
    [0.333915792790082, 0.333259349210601, 0.332820857081489],
    [0.333818454946367, 0.333275050279383, 0.332901731283444],
    [0.333672774928456, 0.333294328448732, 0.333025967488632],
    [0.333569513405591, 0.333309424957775, 0.333111083081497]
  ],
  illuminant: [
    49.9755, 52.3118, 54.6482, 68.7015, 82.7549, 87.1204, 91.486, 92.4589,
    93.4318, 90.057, 86.6823, 95.7736, 104.865, 110.936, 117.008, 117.41,
    117.812, 116.336, 114.861, 115.392, 115.923, 112.367, 108.811, 109.082,
    109.354, 108.578, 107.802, 106.296, 104.79, 106.239, 107.689, 106.047,
    104.405, 104.225, 104.046, 102.023, 100, 98.1671, 96.3342, 96.0611, 95.788,
    92.2368, 88.6856, 89.3459, 90.0062, 89.8026, 89.5991, 88.6489, 87.6987,
    85.4936, 83.2886, 83.4939, 83.6992, 81.863, 80.0268, 80.1207, 80.2146,
    81.2462, 82.2778, 80.281, 78.2842, 74.0027, 69.7213, 70.6652, 71.6091,
    72.979, 74.349, 67.9765, 61.604, 65.7448, 69.8856, 72.4863, 75.087, 69.3398,
    63.5927, 55.0054, 46.4182, 56.6118, 66.8054, 65.0941, 63.3828
  ],
  illuminant_scalar: 2113.454951,
}

// https://bottosson.github.io/posts/colorwrong/#what-can-we-do%3F
const gammaToLinear = (c) =>
  c >= 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
const linearToGamma = (c) =>
  c >= 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;

export function mixSpectrums(specA, specB, t) {
  if (specA.length !== specB.length)
    throw new Error("spectrum length mismatch");
  const mixedSpectrum = new Array(specA.length).fill(0);

  for (let i = 0; i < specA.length; i++) {
    const a = specA[i];
    const b = specB[i];
    const t0 = t;
    const w1 = t0;
    const w0 = 1 - t0;
    const X = Math.pow(a, w0) * Math.pow(b, w1);
    mixedSpectrum[i] = X;
  }
  return mixedSpectrum;
}

export function mixAllSpectrums(colors) {
  const len = colors[0].spectrum.length;
  const mixedSpectrum = new Array(len).fill(0);
  let weightSum = 0;
  for (let i = 0; i < colors.length; i++) {
    const spec = colors[i];
    const w = spec.weight;
    const s = spec.spectrum;
    for (let j = 0; j < s.length; j++) {
      mixedSpectrum[j] += Math.log(s[j]) * w;
    }
    weightSum += w;
  }

  for (let i = 0; i < mixedSpectrum.length; i++) {
    mixedSpectrum[i] = Math.exp(mixedSpectrum[i] / weightSum);
  }
  return mixedSpectrum;
}

export function sRGBToSpectrum(sRGB) {
  const spec = new Array(WAVELENGTH_COUNT);
  const r = sRGB[0] / 0xff;
  const g = sRGB[1] / 0xff;
  const b = sRGB[2] / 0xff;

  // // in 0..1 range
  for (var i = 0; i < WAVELENGTH_COUNT; ++i) {
    const xyz = DATA.basis[i];
    spec[i] = xyz[0] * r + xyz[1] * g + xyz[2] * b;
  }
  return spec;
}

export function spectrumToSRGB(s) {
  var x = 0,
    y = 0,
    z = 0;

  const illum = DATA.illuminant;
  for (var i = 0; i < illum.length; ++i) {
    var intens = s[i] * illum[i];
    var xyzConv = DATA.CMF[i];
    x += xyzConv[0] * intens;
    y += xyzConv[1] * intens;
    z += xyzConv[2] * intens;
  }

  // NOTE: This matrix converts directly to sRGB i.e. with gamma correction
  // The transformation matrix is computed using the algorithm outlined on this page:
  // http://brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  const XYZ_to_RGB_matrix = [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252],
  ];
  const rgb = XYZ_to_RGB_matrix.map(
    (vec) => (vec[0] * x + vec[1] * y + vec[2] * z) / DATA.illuminant_scalar
  );
  return rgb.map((x) => Math.round(x * 0xff));
}
