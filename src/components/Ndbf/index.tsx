import React from "react";
import { NumberAndTitle } from "../NumberAndTitle";
import { CustomBackground } from "../CustomBackground";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";

function Ndbf(props: any) {
  const { data = {} } = props;
  const { yearTotalPremium, insure, type } = data;
  const colorA = "#5D80FF";
  const colorB = "#F6AA14";
  return (
    <div className="ndbfContainer">
      <div className="ndbf-title">
        <CustomBackground typeNo={22} />
        <div className="mainTitle">保费收入(万)</div>
        <CustomBackground typeNo={23} />
      </div>
      <div className="ndbf-bottomBox">
        <div className="ndbf-totalBox">
          <div className="subTitle" style={{ fontWeight: 700 }}>
            总数
          </div>
          <NumberAndTitle
            isThousands
            data={yearTotalPremium}
            surfix=""
            textStyle={{ color: "#fff", fontSize: 24 }}
          />
        </div>
        <div className="ndbf-items">
          <div className="ndbf-item">
            <div className="subTitle">A类</div>
            <NumberAndTitle
              isThousands
              data={type.aPremium}
              surfix=""
              textStyle={{ color: colorA, fontSize: 16 }}
            />
          </div>
          <div className="ndbf-item">
            <div className="subTitle">B类</div>
            <NumberAndTitle
              isThousands
              data={type.bPremium}
              surfix=""
              textStyle={{ color: colorA, fontSize: 16 }}
            />
          </div>
          <div className="ndbf-item">
            <div className="subTitle">统保</div>
            <NumberAndTitle
              isThousands
              data={type.unifyPremium}
              surfix=""
              textStyle={{ color: colorA, fontSize: 16 }}
            />
          </div>
          <div className="ndbf-item">
            <div className="subTitle">车险</div>
            <NumberAndTitle
              isThousands
              data={insure.carPremium}
              surfix=""
              textStyle={{ color: colorB, fontSize: 16 }}
            />
          </div>
          <div className="ndbf-item">
            <div className="subTitle">财产险</div>
            <NumberAndTitle
              isThousands
              data={insure.notCarPropertyPremium}
              surfix=""
              textStyle={{ color: colorB, fontSize: 16 }}
            />
          </div>
          <div className="ndbf-item">
            <div className="subTitle">意健险</div>
            <NumberAndTitle
              isThousands
              data={insure.notCarAccidentHealthPremium}
              surfix=""
              textStyle={{ color: colorB, fontSize: 16 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithContainer(Ndbf);
