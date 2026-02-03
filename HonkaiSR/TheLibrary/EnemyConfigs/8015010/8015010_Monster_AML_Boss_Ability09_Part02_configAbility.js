const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_AttackAddedRatio": 1
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_AttackAddedRatio": 1
      }
    },
    "Ability Start",
    "Trigger: Ability End"
  ],
  "references": []
}