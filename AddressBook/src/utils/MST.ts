import { observer } from "mobx-react"

export default function components(fns) {
    Object.keys(fns).forEach(key => {
        fns[key] = observer(fns[key])
    })
    return fns
}
