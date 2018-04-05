# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTrackerSpa.Repo.insert!(%TaskTrackerSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TaskTrackerSpa.Repo
  alias TaskTrackerSpa.Accounts.User
  alias TaskTrackerSpa.Social.Task

  def run do
    p1 = Comeonin.Argon2.hashpwsalt("password1")
    p2 = Comeonin.Argon2.hashpwsalt("password2")
    p3 = Comeonin.Argon2.hashpwsalt("password3")
    p4 = Comeonin.Argon2.hashpwsalt("password4")

    Repo.delete_all(User)
    a = Repo.insert!(%User{name: "Bob", password_hash: p1})
    b = Repo.insert!(%User{name: "Sharon", password_hash: p2})
    c = Repo.insert!(%User{name: "Sam", password_hash: p3})
    d = Repo.insert!(%User{name: "George", password_hash: p4})

    Repo.delete_all(Task)

    Repo.insert!(%Task{
      user_id: a.id,
      assigned_id: a.id,
      title: "#{a.name}'s Task",
      description: "This is a task for #{a.name}.",
      completed: false,
      duration: 15
    })

    Repo.insert!(%Task{
      user_id: b.id,
      assigned_id: c.id,
      title: "#{c.name}'s Task",
      description: "This is a task for #{c.name}.",
      completed: true,
      duration: 0
    })
  end
end

Seeds.run
