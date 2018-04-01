defmodule TaskTrackerSpa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string, null: false
      add :description, :text, null: false
      add :completed, :boolean, default: false, null: false
      add :used_id, references(:users, on_delete: :nothing), null: false
      add :assigned_id, references(:users, on_delete: :nothing), null: false

      timestamps()
    end

    create index(:tasks, [:used_id])
    create index(:tasks, [:assigned_id])
  end
end
