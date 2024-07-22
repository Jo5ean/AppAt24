import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import './styles.css'; // Importa el archivo CSS

const Profile: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('description');

    const planDescription = (
        <div>
            <div className="text-sm text-gray-700">Límite de servicios: 1 al mes, 12 por año</div>
            <ul className="text-sm list-disc list-inside mt-2">
                <li>Traslado (Hasta 500 km)</li>
                <li>Mecánica ligera</li>
                <li>Abastecimiento de combustible y lubricantes (A estación de svc más cercana)</li>
                <li>Localización y envío de piezas de repuesto (Repuesto a cargo de socio)</li>
            </ul>
        </div>
    );

    const billingInfo = (
        <div>
            <div className="text-sm font-bold mb-2">Últimos pagos</div>
            <table className="table-auto w-full mt-2 text-sm">
                <thead>
                    <tr>
                        <th className="px-2 py-2">Cta.</th>
                        <th className="px-2 py-2">F. Venc.</th>
                        <th className="px-2 py-2">F. Pago</th>
                        <th className="px-2 py-2">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-2 py-2">19</td>
                        <td className="border px-2 py-2">10/05/2024</td>
                        <td className="border px-2 py-2">14/05/2024</td>
                        <td className="border px-2 py-2 text-yellow-600">Pendiente</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-2">18</td>
                        <td className="border px-2 py-2">10/04/2024</td>
                        <td className="border px-2 py-2">13/04/2024</td>
                        <td className="border px-2 py-2 text-green-700">Pagado</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-2">17</td>
                        <td className="border px-2 py-2">10/03/2024</td>
                        <td className="border px-2 py-2">13/03/2024</td>
                        <td className="border px-2 py-2 text-green-700">Pagado</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="overflow-y-auto flex justify-center items-center">
            <Card className="card-margin relative flex w-full max-w-md flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative h-64 overflow-hidden rounded-xl bg-clip-border text-white">
                    <div className="absolute inset-0 m-auto flex justify-center items-center mb-5">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="heading_8264 font-extrabold">500 PREMIUN</p>
                                    {/* <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                                        <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                                        <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                                        <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                                    </svg> */}
                                    <img src="/logo_color.png" alt="Logo color" className="w-9 h-9 logo" />
                                    <svg version="1.1" className="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xmlSpace="preserve">
                                        <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
                                              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
                                              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
                                              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
                                              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
                                              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
                                              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
                                              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
                                              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
                                              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
                                              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
                                              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
                                              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
                                              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
                                              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
                                              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
                                              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
                                              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
                                              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
                                              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
                                              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
                                              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
                                              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                                              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                                              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
                                    </svg>
                                    <img src="/moto.svg" className="contactless w-[40px] h-[40px]" alt="imagen moto" />
                                    <p className="number">ZANELLA 50 V2KS</p>
                                    <p className="valid_thru">VALIDO HASTA</p>
                                    <p className="date_8264">1 2 / 2 4</p>
                                    <p className="name">LUIS CRUZ</p>
                                </div>
                                <div className="flip-card-back">
                                    <div className="strip"></div>
                                    <div className='grid grid-cols-1'>
                                        <p className='text-start text-white text-sm mt-5 mb-2 mx-3'>Nro de Socio:</p>
                                        <div className="mstrip"><span className='text-sm text-black font-bold'>606442</span></div>
                                    </div>
                                    <div className='relative grid grid-cols-1 mt-4'>
                                        <p className='absolute top-0 left-0 text-start text-white text-sm mt-0 mb-2 mx-3'>Patente:</p>
                                        <div className="sstrip mt-5">
                                            <p className="code"><span className='text-sm'>ZZ23ZZ</span></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">500 PREMIUN</div>
                    <div className="bg-gray-400 text-white text-sm px-3 py-1 rounded-full inline-block">Nro de socio: 606442</div>
                </div>
                <div className="px-6 py-4 flex items-center">
                    <img src="/casco.png" alt="Moto Icon" className="mr-4 w-10" />
                    <div>
                        <div className="font-bold">ZANELLA 50 V2KS</div>
                        <div className="text-gray-500">Z123ZZZ</div>
                    </div>
                </div>
                <div className="border-t">
                    <div className="flex">
                        <button
                            className={`w-1/2 py-3 text-center ${selectedTab === 'description' ? 'border-b-2 border-[#3AAA34]' : 'text-gray-500'}`}
                            onClick={() => setSelectedTab('description')}>
                            Descripción del Plan
                        </button>
                        <button
                            className={`w-1/2 py-3 text-center ${selectedTab === 'billing' ? 'border-b-2 border-[#3AAA34]' : 'text-gray-500'}`}
                            onClick={() => setSelectedTab('billing')}>
                            Facturación
                        </button>
                    </div>
                    <div className="p-6">
                        {selectedTab === 'description' ? planDescription : billingInfo}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;