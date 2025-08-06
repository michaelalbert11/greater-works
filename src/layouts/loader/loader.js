import React, { useMemo } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Loader = (props) => {
  const styles = useMemo(() => {
    return {
      backdrop: {
        zIndex: 100010,
        background: "rgba(255,255,255,0.7)",
      },
      spinner: {
        color: "var(--clr-white)",
      },
    };
  }, []);
  if (props.loading)
    return (
      <Backdrop
        className="loader-backdrop"
        sx={styles.backdrop}
        open={props?.loading}
      >
        <CircularProgress sx={styles.spinner} />
      </Backdrop>
    );
};

export default React.memo(Loader);
