namespace PEmpregado
{
    partial class FrmMensalista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label4 = new System.Windows.Forms.Label();
            this.txtData = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txtSalario = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.matricula = new System.Windows.Forms.TextBox();
            this.btnInstanciarMensalistaParametros = new System.Windows.Forms.Button();
            this.btnInstanciarMensalitsta = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(173, 237);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(181, 16);
            this.label4.TabIndex = 19;
            this.label4.Text = "Data de Entrada na Empresa";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // txtData
            // 
            this.txtData.Location = new System.Drawing.Point(404, 231);
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(100, 22);
            this.txtData.TabIndex = 18;
            this.txtData.TextChanged += new System.EventHandler(this.txtData_TextChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(173, 188);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(97, 16);
            this.label3.TabIndex = 17;
            this.label3.Text = "Salário Mensal";
            this.label3.Click += new System.EventHandler(this.label3_Click);
            // 
            // txtSalario
            // 
            this.txtSalario.Location = new System.Drawing.Point(279, 182);
            this.txtSalario.Name = "txtSalario";
            this.txtSalario.Size = new System.Drawing.Size(100, 22);
            this.txtSalario.TabIndex = 16;
            this.txtSalario.TextChanged += new System.EventHandler(this.txtSalario_TextChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(173, 144);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(44, 16);
            this.label2.TabIndex = 15;
            this.label2.Text = "Nome";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // txtNome
            // 
            this.txtNome.Location = new System.Drawing.Point(279, 138);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(100, 22);
            this.txtNome.TabIndex = 14;
            this.txtNome.TextChanged += new System.EventHandler(this.txtNome_TextChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(173, 94);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(61, 16);
            this.label1.TabIndex = 13;
            this.label1.Text = "Matricula";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // matricula
            // 
            this.matricula.Location = new System.Drawing.Point(279, 88);
            this.matricula.Name = "matricula";
            this.matricula.Size = new System.Drawing.Size(100, 22);
            this.matricula.TabIndex = 12;
            this.matricula.TextChanged += new System.EventHandler(this.matricula_TextChanged);
            // 
            // btnInstanciarMensalistaParametros
            // 
            this.btnInstanciarMensalistaParametros.Location = new System.Drawing.Point(475, 299);
            this.btnInstanciarMensalistaParametros.Name = "btnInstanciarMensalistaParametros";
            this.btnInstanciarMensalistaParametros.Size = new System.Drawing.Size(146, 63);
            this.btnInstanciarMensalistaParametros.TabIndex = 11;
            this.btnInstanciarMensalistaParametros.Text = "Instanciar Mensalista com parâmetros";
            this.btnInstanciarMensalistaParametros.UseVisualStyleBackColor = true;
            this.btnInstanciarMensalistaParametros.Click += new System.EventHandler(this.btnInstanciarMensalistaParametros_Click);
            // 
            // btnInstanciarMensalitsta
            // 
            this.btnInstanciarMensalitsta.Location = new System.Drawing.Point(188, 299);
            this.btnInstanciarMensalitsta.Name = "btnInstanciarMensalitsta";
            this.btnInstanciarMensalitsta.Size = new System.Drawing.Size(146, 63);
            this.btnInstanciarMensalitsta.TabIndex = 10;
            this.btnInstanciarMensalitsta.Text = "Instanciar Mensalista";
            this.btnInstanciarMensalitsta.UseVisualStyleBackColor = true;
            this.btnInstanciarMensalitsta.Click += new System.EventHandler(this.btnInstanciarMensalitsta_Click);
            // 
            // FrmMensalista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txtData);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtSalario);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.matricula);
            this.Controls.Add(this.btnInstanciarMensalistaParametros);
            this.Controls.Add(this.btnInstanciarMensalitsta);
            this.Name = "FrmMensalista";
            this.Text = "FormMensalista";
            this.Load += new System.EventHandler(this.FrmMensalista_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txtData;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txtSalario;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox matricula;
        private System.Windows.Forms.Button btnInstanciarMensalistaParametros;
        private System.Windows.Forms.Button btnInstanciarMensalitsta;
    }
}