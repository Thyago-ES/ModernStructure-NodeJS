let customers = [
	{ id: 1, name: "Youtube", site: "http://www.youtube.com" },
	{ id: 2, name: "Google", site: "http://www.google.com" },
	{ id: 3, name: "UOL", site: "http://www.uol.com" },
];

class CustomersController {
	// Listagem dos Customers
	index(req, res) {
		return res.json(customers);
	}

	// Recupera 1 Customer
	show(req, res) {
		const id = parseInt(req.params.id);
		const customer = customers.find((item) => item.id === id);
		const status = customer ? 200 : 404;

		return res.status(status).json(customer);
	}

	// Cria um novo Customer
	create(req, res) {
		const { name, site } = req.body;
		const id = customers[customers.length - 1].id + 1;

		const newCustomer = { id, name, site };

		customers.push(newCustomer);

		return res.status(201).json(newCustomer);
	}

	// Atualiza um Customer
	update(req, res) {
		const id = parseInt(req.params.id);
		const { name, site } = req.body;

		const index = customers.findIndex((item) => item.id === id);
		const status = index >= 0 ? 200 : 404;

		if (index >= 0) {
			customers[index] = { id, name, site };
		}

		return res.status(status).json(customers[index]);
	}

	// Deleta um Customer
	destroy(req, res) {
		const id = parseInt(req.params.id);

		const index = customers.findIndex((item) => item.id === id);
		const status = index >= 0 ? 200 : 404;

		if (index >= 0) {
			customers.splice(index, 1);
		}

		return res.status(status).json();
	}
}

export default new CustomersController();
