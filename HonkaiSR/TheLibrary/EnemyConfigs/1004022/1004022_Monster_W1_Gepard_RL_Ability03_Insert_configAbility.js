const configAbility = {
  "fileName": "1004022_Monster_W1_Gepard_RL_Ability03_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG"
      }
    },
    {
      "name": "Trigger 0-Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "multiBase": 1
    }
  ],
  "references": []
}