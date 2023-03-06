

const materialController = {
    getMaterial: async (req, res) => {
        try {
            const material = await 
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}