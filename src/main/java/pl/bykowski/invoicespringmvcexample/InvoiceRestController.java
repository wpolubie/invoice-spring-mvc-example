package pl.bykowski.invoicespringmvcexample;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InvoiceRestController {

    private final InvoiceService invoiceService;

    public InvoiceRestController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/api")
    public List<Invoice> getAllInvoices() {
        return invoiceService.getAllInvoices();
    }
}
