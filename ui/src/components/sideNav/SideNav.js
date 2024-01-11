import React from 'react';
import "../../App.css";

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul>
                <li title="İş Makinaları ve Ekipmanları " className="list-group-item">
                    <a
                        title="İş Makinaları ve Ekipmanları "
                        href="https://www.makinaturkiye.com/is-makinalari-ve-ekipmanlari-c-99587 "
                    >
                        İş Makinaları
                    </a>
                </li>
                <li title="Forklift " className="list-group-item">
                    <a
                        title="Forklift "
                        href="https://www.makinaturkiye.com/forklift-c-123372 "
                    >
                        Forklift
                        <span className="text-muted text-sm">(298) </span>
                    </a>
                </li>
                <li title="Akülü Forklift " className="list-group-item">
                    <a
                        title="Akülü Forklift "
                        href="https://www.makinaturkiye.com/akulu-forklift-c-123690 "
                    >
                        Akülü Forklift
                        <span className="text-muted text-sm">(174) </span>
                    </a>
                </li>
                <li title="Benzinli Forklift " className="list-group-item">
                    <a
                        title="Benzinli Forklift "
                        href="https://www.makinaturkiye.com/benzinli-forklift-c-123601 "
                    >
                        Benzinli Forklift
                        <span className="text-muted text-sm">(4) </span>
                    </a>
                </li>
                <li title="Dizel Forklift " className="list-group-item">
                    <a
                        title="Dizel Forklift "
                        href="https://www.makinaturkiye.com/dizel-forklift-c-123373 "
                    >
                        Dizel Forklift
                        <span className="text-muted text-sm">(108) </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
