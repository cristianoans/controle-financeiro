import { useForm } from "react-hook-form";
import { Container, FloatingLabel, Form, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";

export function CadastroDespesaReceita() {
    const { register, watch, handleSubmit, formState: { errors, isSubmitted } } = useForm(
        {defaultValues: {tipoTransação: "", parcelamento: ""}}
    );
    const tipoTransacao = watch("tipoTransacao");
    const parcelamento = watch("parcelamento");
    const [despesaParcelada, setDespesaParcelada] = useState(false);

  

    useEffect(() => {
        if (tipoTransacao === "despesa" && parcelamento === "sim") {
          setDespesaParcelada(true);
        } else {
            setDespesaParcelada(false);
        }
      }, [tipoTransacao, parcelamento]);
      


    return (
        <>
            <Container>
                <Form>
                    <FloatingLabel className="mb-3" controlId="tipoTransação" label="Selecione o tipo de transação">
                        <Form.Select {...register("tipoTransacao")}>
                            <option value="" disabled defaultValue>Selecione</option>
                            <option value="despesa">Despesa</option>
                            <option value="receita">Receita</option>
                        </Form.Select>
                    </FloatingLabel>

                    {tipoTransacao === "despesa" && (
                        <FloatingLabel className="mb-3" controlId="parcelamento" label="Parcelado?">
                        <Form.Select {...register("parcelamento")}>
                          <option value="" disabled defaultValue>Selecione</option>
                          <option value="sim">Sim</option>
                          <option value="não">Não</option>
                        </Form.Select>
                      </FloatingLabel>
                    )}

                    {despesaParcelada && (
                        <FloatingLabel className="mb-3" controlId="qtdParcelamento" label="Informe em quantas parcelas">
                            <FormControl type="number" {...register("qtdParcelamento")} />
                        </FloatingLabel>
                    )}

                    <FloatingLabel className="mb-3" controlId="categoria" label="Informe o valor da transação">
                        <FormControl type="number" {...register("categoria")} />
                    </FloatingLabel>
                </Form>
            </Container>
        </>
    );
}
