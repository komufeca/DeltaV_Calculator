export const calculateDeltaV = (isp, g0, m0, mF) => {
    return Math.floor(isp * g0 * Math.log(m0 / mF));
}